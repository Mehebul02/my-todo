/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState, useEffect, JSX } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {  Calendar, X } from 'lucide-react'
import { updateTodo } from '@/lib/api' 
import Cookies from "js-cookie";
import { toast } from 'sonner'
export default function EditTaskModal({
  isOpen,
  onClose,
  todo,
  onUpdate,
}: any):JSX.Element | null{
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [priority, setPriority] = useState<'extreme' | 'moderate' | 'low'>('moderate')
  const [description, setDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (todo) {
      setTitle(todo.title)
      setDate(todo.todo_date?.split('T')[0] ?? '') 
      setPriority(todo.priority)
      setDescription(todo.description || '')
    } else {
    
      setTitle('')
      setDate('')
      setPriority('moderate')
      setDescription('')
    }
  }, [todo])

  const access = Cookies.get("access_token")

  const handleSubmit = async () => {
    if (!todo?.id) return
    if (!title.trim()) {
      setError("Title is required")
      return
    }
    if (!date) {
      setError("Date is required")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      if (!access) {
        throw new Error("No access token found")
      }


      await updateTodo(access, todo.id, {
        title,
        description: description || undefined,
        priority,
        todo_date: date,
      } as any)

      toast.success("Task updated successfully!")
      
 
      onUpdate?.()
      onClose()

    } catch (err) {
      console.error("Failed to update todo:", err)
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen || !todo) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-slate-900">Edit Task</h2> 
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
                onChange={(e) => setPriority(e.target.value as 'extreme' | 'moderate' | 'low')}
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
                onChange={(e) => setPriority(e.target.value as 'extreme' | 'moderate' | 'low')}
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
                onChange={(e) => setPriority(e.target.value as 'extreme' | 'moderate' | 'low')}
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

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <Button
            onClick={handleSubmit}
            disabled={isLoading}
            className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            {isLoading ? 'Updating...' : 'Update Task'} {/* ✅ Changed */}
          </Button>
          <button
            onClick={() => {
              // ✅ Optional: Add reset logic, but usually not needed in edit
              onClose()
            }}
            className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}