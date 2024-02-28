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

export const registerUser = async (body: Body): Promise<User> => {
  const response = await fetch("http://localhost:8081/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(`${json.message}`);
  }

  return json.message;
};
