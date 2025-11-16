export type Todo = {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
  order?: number; 
  createdAt?: string;
  updatedAt?: string;
};

export type User = {
  _id: string;
  name: string;
  email: string;
};
