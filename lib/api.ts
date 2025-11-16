/* eslint-disable @typescript-eslint/no-explicit-any */
import { Todo } from "@/types/global";

const BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

type ApiOptions = {
    token?: string | null;
    method?: string;
    body?: any;
};

async function api<T>(path: string, { token, method = "GET", body }: ApiOptions = {}): Promise<T> {
    const res = await fetch(`${BASE}`, {
        method,
        headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
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
    api<{ token: string; user: any }>("/users/signup/", { method: "POST", body: data });

export const login = (data: { email: string; password: string }) =>
    api<{ token: string; user: any }>("/api/v1/auth/login", { method: "POST", body: data });

// Todos endpoints 
export const getTodos = (token: string) => api<Todo[]>("/api/v1/todos", { token });
export const createTodo = (token: string, body: { title: string; description?: string }) =>
    api<Todo>("/api/v1/todos", { token, method: "POST", body });
export const updateTodo = (token: string, id: string, body: Partial<Todo>) =>
    api<Todo>(`/api/v1/todos/${id}`, { token, method: "PUT", body });
export const deleteTodo = (token: string, id: string) =>
    api<{ success: boolean }>(`/api/v1/todos/${id}`, { token, method: "DELETE" });

// If API offers reorder endpoint, call it; otherwise patch orders individually
export const reorderTodos = (token: string, orderedIds: string[]) =>
    api("/api/v1/todos/reorder", { token, method: "POST", body: { orderedIds } });
