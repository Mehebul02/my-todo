/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from 'react';
import { Pencil, Trash2, GripVertical } from 'lucide-react';
import EditTaskModal from './EditModal';
import { deleteTodo } from '@/lib/api';
import Cookies from "js-cookie";
import { toast } from 'sonner';
interface Todo {
  id: string;
  title: string;
  description: string;
  priority: 'extreme' | 'moderate' | 'low';
  todo_date: string; // ← key fix
  created_at: string;
  is_completed: boolean;
}

export const TaskCard = ({ task, handleRemoveLocal }: any) => {
   const access: any = Cookies.get("access_token")
  const [isOpenModal, setIsOpenModal] = useState(false);
  

  const getPriorityStyles = (priority: string) => {
    switch (priority) {
      case 'extreme':
        return 'bg-red-50 text-red-600 border-red-100';
      case 'moderate':
        return 'bg-green-50 text-green-600 border-green-100';
      case 'low':
        return 'bg-yellow-50 text-yellow-600 border-yellow-100';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-100';
    }
  };

  
  const formatDate = (dateString: string) => {
    if (!dateString) return '—';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Invalid date';
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

const handleDelete = async (id: any) => {
  try {
    await deleteTodo(access, id);
    toast.success("Deleted successfully!");
    handleRemoveLocal(id);
  } catch (error) {
    toast.error("Something went wrong!");
    console.error(error);
  }
};
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{task.title}</h3>
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-md text-sm font-medium border capitalize ${getPriorityStyles(task.priority)}`}>
            {task.priority} 
          </span>
          <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
            <GripVertical className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
        {task.description || 'No description'}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-sm text-gray-500 font-medium">
          Due {formatDate(task.todo_date)} {/* ✅ use todo_date */}
        </span>
        <div className="flex items-center gap-2">
          <button onClick={() => setIsOpenModal(true)} className="p-2 hover:bg-blue-50 rounded-lg transition-colors group cursor-pointer">
            <Pencil className="w-4 h-4  text-gray-400 group-hover:text-blue-600" />
          </button>
          <button onClick={()=> handleDelete(task.id)} className="p-2 hover:bg-red-50 rounded-lg cursor-pointer transition-colors group">
            <Trash2 className="w-4 h-4 text-gray-400 group-hover:text-red-600" />
          </button>
        </div>
      </div>
      <EditTaskModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} todo={task}  as />
    </div>
  );
};