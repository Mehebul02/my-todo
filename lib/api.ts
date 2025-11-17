/* eslint-disable @typescript-eslint/no-explicit-any */
import { Todo } from "@/types/global";

const BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

type ApiOptions = {
  method?: string;
  body?: any;
  headers?: any;
  access?: string | null; // optional now
};

async function api<T>(path: string, { access, method = "GET", body }: ApiOptions = {}): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(access ? { Authorization: `Bearer ${access}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
    credentials: "omit",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }
  return res.json();
}

// Auth endpoints
export const signup = (data: { first_name: string; last_name: string; email: string; password: string }) =>
  api<{ access: string; refresh: string; user: any }>("/users/signup/", { method: "POST", body: data });

export const login = (data: { email: string; password: string }) =>
  api<{ access: string; refresh: string; user: any }>("/auth/login/", { method: "POST", body: data });

export const getMe = (access: string) =>
  api<{ user: any }>("/users/me/", { method: "GET", access });
export const profileUpdate = (access: string, formData: FormData) =>
  fetch(`${BASE}/users/me/`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${access}`,
    },
    body: formData,
  }).then(async res => {
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  });
  
// Todos endpoints 
export const getTodos = (
  access: string,
  params?: {
    search?: string;
    priority?: string;
    todo_date?: string;
    is_completed?: boolean;
  }
) => {
  // Build query string manually
  const queryParams = new URLSearchParams();
  if (params?.search) queryParams.append('search', params.search);
  if (params?.priority) queryParams.append('priority', params.priority);
  if (params?.todo_date) queryParams.append('todo_date', params.todo_date);
  if (params?.is_completed !== undefined) {
    queryParams.append('is_completed', String(params.is_completed));
  }

  const queryString = queryParams.toString();
  const path = `/todos/${queryString ? `?${queryString}` : ''}`;

  return api<Todo[]>(path, { access });
};
export const createTodo = (access: string, body: { title: string; description?: string, priority: "extreme" | "moderate" | "low", todo_date: string }) =>
  api<Todo>("/todos/", { access, method: "POST", body });
export const updateTodo = (access: string, id: string, body: Partial<Todo>) =>
  api<Todo>(`/api/v1/todos/${id}`, { access, method: "PUT", body });
export const deleteTodo = (access: string, id: string) =>
  api<{ success: boolean }>(`/api/v1/todos/${id}`, { access, method: "DELETE" });

// Reorder
export const reorderTodos = (access: string, orderedIds: string[]) =>
  api("/api/v1/todos/reorder", { access, method: "POST", body: { orderedIds } });
