'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Trash2, Calendar, X } from 'lucide-react'

interface AddTaskModalProps {
  isOpen: boolean
  onClose: () => void
  // onSubmit: (task: { title: string; date: string; priority: string; description: string }) => void
}

export default function AddTaskModal({ isOpen, onClose,  }: AddTaskModalProps) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [priority, setPriority] = useState('moderate')
  const [description, setDescription] = useState('')

  const handleSubmit = () => {
    if (title.trim()) {
      // onSubmit({ title, date, priority, description })
      setTitle('')
      setDate('')
      setPriority('moderate')
      setDescription('')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-slate-900">Add New Task</h2>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5 cursor-pointer" />
          </button>
        </div>

        {/* Title */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-900 mb-2">Title</label>
          <Input
            placeholder="Enter task title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-900"
          />
        </div>

        {/* Date */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-900 mb-2">Date</label>
          <div className="relative">
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-900"
            />
            <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Priority */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-900 mb-3">Priority</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="priority"
                value="extreme"
                checked={priority === 'extreme'}
                onChange={(e) => setPriority(e.target.value)}
                className="w-4 h-4 cursor-pointer accent-red-500"
              />
              <span className="flex items-center gap-2 text-sm text-slate-700">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                Extreme
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="priority"
                value="moderate"
                checked={priority === 'moderate'}
                onChange={(e) => setPriority(e.target.value)}
                className="w-4 h-4 cursor-pointer accent-green-500"
              />
              <span className="flex items-center gap-2 text-sm text-slate-700">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Moderate
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="priority"
                value="low"
                checked={priority === 'low'}
                onChange={(e) => setPriority(e.target.value)}
                className="w-4 h-4 cursor-pointer accent-yellow-500"
              />
              <span className="flex items-center gap-2 text-sm text-slate-700">
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                Low
              </span>
            </label>
          </div>
        </div>

        {/* Task Description */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-900 mb-2">Task Description</label>
          <textarea
            placeholder="Start writing here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-900 resize-none h-32"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <Button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Done
          </Button>
          <button
            onClick={() => {
              setTitle('')
              setDate('')
              setPriority('moderate')
              setDescription('')
              onClose()
            }}
            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
