import React from 'react';
import { Pencil, Trash2, GripVertical } from 'lucide-react';

interface Todo {
  id: string;
  title: string;
  date: string;
  priority: 'Low' | 'Medium' | 'High';
  description: string;
  createdAt: Date;
}



export const TaskCard = ({ task }: { task: Todo }) => {
  const getPriorityStyles = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-50 text-red-600 border-red-100';
      case 'Medium':
        return 'bg-green-50 text-green-600 border-green-100';
      case 'Low':
        return 'bg-yellow-50 text-yellow-600 border-yellow-100';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-100';
    }
  };

  const getPriorityLabel = (priority: string) => {
    if (priority === 'High') return 'Extreme';
    if (priority === 'Medium') return 'Moderate';
    return priority;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{task.title}</h3>
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-md text-sm font-medium border ${getPriorityStyles(task.priority)}`}>
            {getPriorityLabel(task.priority)}
          </span>
          <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
            <GripVertical className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
        {task.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-sm text-gray-500 font-medium">
          Due {formatDate(task.date)}
        </span>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors group">
            <Pencil className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
          </button>
          <button className="p-2 hover:bg-red-50 rounded-lg transition-colors group">
            <Trash2 className="w-4 h-4 text-gray-400 group-hover:text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
};
