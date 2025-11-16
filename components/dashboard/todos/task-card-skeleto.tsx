import React from 'react';

export const TaskCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 animate-pulse">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        {/* Title skeleton */}
        <div className="h-6 bg-gray-200 rounded-md w-40"></div>
        
        <div className="flex items-center gap-2">
          {/* Priority badge skeleton */}
          <div className="h-7 bg-gray-200 rounded-md w-20"></div>
          {/* Grip icon skeleton */}
          <div className="h-9 w-9 bg-gray-200 rounded-lg"></div>
        </div>
      </div>

      {/* Description skeleton */}
      <div className="space-y-2 mb-6">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        {/* Date skeleton */}
        <div className="h-4 bg-gray-200 rounded-md w-28"></div>
        
        {/* Action buttons skeleton */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-gray-200 rounded-lg"></div>
          <div className="h-8 w-8 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

// Multiple skeletons for loading state - matches your grid layout
export const TaskCardSkeletonGroup = ({ count = 3 }: { count?: number }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <TaskCardSkeleton key={index} />
      ))}
    </>
  );
};