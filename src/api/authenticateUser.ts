export interface User {
  id: number;
  email: string;
  first_name?: string;
  last_name?: string;
  active: number;
  created_at: Date;
  updated_at: Date;
}

export interface Body {
  email: string;
  password: string;
}

export const authenticateUser = async (body: Body): Promise<User> => {
  const response = await fetch("http://localhost:8081/authenticate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  const json = await response.json();
  return json.data as User;
};
