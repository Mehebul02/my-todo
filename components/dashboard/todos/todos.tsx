/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CardHeader, CardTitle } from '@/components/ui/card'
import { Search, Plus, ArrowUpDown, CheckCircle2 } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import AddTaskModal from './add-task-modal'
import { TaskCard } from './task-card'
import { TaskCardSkeletonGroup } from './task-card-skeleto'
import { getTodos } from '@/lib/api' 
import Cookies from "js-cookie";
interface Todo {
   id: string;
  title: string;
  date: string;
  priority: 'Low' | 'Medium' | 'High';
  description: string;
  createdAt: Date;
}

export default function TodosPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [filterBy, setFilterBy] = useState<string | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [todos, setTodos] = useState<Todo[]>([])
    const [error, setError] = useState<string | null>(null)
 const access = Cookies.get("access_token")
    // Fetch todos whenever search or filter changes
    useEffect(() => {
        const fetchTodos = async () => {
            setIsLoading(true)
            setError(null)

            try {
          
             
                if (!access) throw new Error("No access token")

                // Build filters
                const params: any = {}
                if (searchQuery.trim()) params.search = searchQuery.trim()
                if (filterBy === 'today') params.todo_date = new Date().toISOString().split('T')[0]
                if (filterBy === '5days') {
                    const date = new Date()
                    date.setDate(date.getDate() + 5)
                    params.todo_date = date.toISOString().split('T')[0]
                }
                // Add more filters as needed...

                const data = await getTodos(access, params)

                // Extract results from paginated response
                setTodos((data as any).results)

            } catch (err) {
                console.error("Failed to fetch todos:", err)
                setError(err instanceof Error ? err.message : "Failed to load tasks")
            } finally {
                setIsLoading(false)
            }
        }

        fetchTodos()
    }, [searchQuery, filterBy])

    const handleAddTask = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const handleSearch = (value: string) => {
        setSearchQuery(value)
    }

    const handleAddSuccess = (newTodo: Todo) => {
        // Add new todo to list immediately
        setTodos(prev => [newTodo, ...prev])
    }

    return (
        <div className="w-full flex justify-center items-start py-4 min-h-screen">
            <div className="w-full p-8">
                {/* Header */}
                <CardHeader className="mb-6 p-0">
                    <CardTitle className="text-4xl font-bold text-[#0D224A] border-b-2 border-[#5272FF] w-16">Todos</CardTitle>
                </CardHeader>

                {/* Search and Filter Bar */}
                <div className="flex gap-4 mb-8 items-center">
                    <div className="relative flex-1">
                        <Input
                            placeholder="Search your task here..."
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                            className="w-full pl-4 pr-12 bg-white py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500" />
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                className="flex items-center gap-2 border-slate-200 text-slate-700 hover:bg-slate-50"
                            >
                                Filter By
                                <ArrowUpDown className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                            <div className="px-2 py-1.5 text-xs font-semibold text-slate-500 uppercase">
                                Date
                            </div>
                            <DropdownMenuItem onClick={() => setFilterBy('today')}>
                                Deadline Today
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setFilterBy('5days')}>
                                Expires in 5 days
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setFilterBy('10days')}>
                                Expires in 10 days
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setFilterBy('30days')}>
                                Expires in 30 days
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setFilterBy(null)}>
                                Clear Filter
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button
                        onClick={handleAddTask}
                        className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-semibold py-2.5 px-6 rounded-lg flex items-center gap-2 transition-colors"
                    >
                        <Plus className="w-5 h-5" />
                        New Task
                    </Button>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                        {error}
                    </div>
                )}

                {/* Content Area */}
                {isLoading ? (
                    <TaskCardSkeletonGroup count={6} />
                ) : todos.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 bg-white rounded-lg shadow-sm">
                        <div className="mb-6 relative w-48 h-40">
                            <svg viewBox="0 0 200 160" className="w-full h-full">
                                <g>
                                    <rect x="30" y="20" width="140" height="100" rx="8" fill="none" stroke="#d1d5db" strokeWidth="2" opacity="0.5" />
                                    <rect x="40" y="35" width="30" height="20" rx="3" fill="#d1d5db" opacity="0.5" />
                                    <line x1="75" y1="38" x2="155" y2="38" stroke="#d1d5db" strokeWidth="2" opacity="0.5" />
                                    <line x1="75" y1="48" x2="140" y2="48" stroke="#d1d5db" strokeWidth="1.5" opacity="0.3" />
                                    <line x1="40" y1="60" x2="155" y2="60" stroke="#d1d5db" strokeWidth="1.5" opacity="0.3" />
                                    <line x1="40" y1="70" x2="155" y2="70" stroke="#d1d5db" strokeWidth="1.5" opacity="0.3" />
                                    <line x1="40" y1="80" x2="130" y2="80" stroke="#d1d5db" strokeWidth="1.5" opacity="0.3" />

                                    <rect x="55" y="45" width="140" height="100" rx="8" fill="white" stroke="#d1d5db" strokeWidth="2" />
                                    <rect x="65" y="60" width="35" height="25" rx="3" fill="#3b82f6" />
                                    <line x1="105" y1="63" x2="180" y2="63" stroke="#d1d5db" strokeWidth="2" />
                                    <line x1="105" y1="73" x2="175" y2="73" stroke="#d1d5db" strokeWidth="1.5" opacity="0.5" />
                                    <line x1="65" y1="88" x2="180" y2="88" stroke="#d1d5db" strokeWidth="1.5" opacity="0.5" />
                                    <line x1="65" y1="100" x2="180" y2="100" stroke="#d1d5db" strokeWidth="1.5" opacity="0.5" />
                                    <line x1="65" y1="112" x2="160" y2="112" stroke="#d1d5db" strokeWidth="1.5" opacity="0.5" />

                                    <circle cx="160" cy="135" r="18" fill="#3b82f6" />
                                    <line x1="160" y1="127" x2="160" y2="143" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                                    <line x1="152" y1="135" x2="168" y2="135" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                                </g>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-700 mb-2">No todos yet</h3>
                        <p className="text-slate-500 text-center mb-6 max-w-sm">
                            Click &quot;New Task&quot; to create your first task and start organizing your work
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {todos.map((todo) => (
                            <TaskCard key={todo.id} task={todo} />
                        ))}
                    </div>
                )}
            </div>

            {/* Modal */}
            <AddTaskModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
              
            />
        </div>
    )
}