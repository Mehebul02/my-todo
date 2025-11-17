export type Todo = {
  id: string;
  title: string;
  description?: string;
  // completed: boolean;
  order?: number; 
  date?: string;
  createdAt?: string;
  updatedAt?: string;
  todo_date?: string;
 priority: 'extreme' | 'moderate' | 'low';

};

export type User = {
  _id: string;
  name: string;
  email: string;
};
