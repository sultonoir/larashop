export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string;
}

export interface Todo {
  id: number;
  task: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: number;
  image_url: string;
  image_public_id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  created_at: string;
  updated_at: string;
}

type Pagination<T> = {
  current_page: number;
  data: T[];
  first_page_url: string | null;
  from: number | null;
  last_page: number;
  last_page_url: string | null;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number | null;
  total: number;
};

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  auth: {
    user: User;
  };
  todos: Todo[];
  products: Pagination<Product>;
};
