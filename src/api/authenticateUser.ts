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

/**
 * Authenticates a user by sending a POST request to the server.
 *
 * @param body - The body of the request, containing the details needed to login a user.
 *
 * @returns A promise that resolves to a user object from the server. If the server responds with an error,
 * the promise will be rejected with an Error object.
 *
 * @throws Will throw an Error if the server responds with a response.ok of false.
 */
export const authenticateUser = async (body: Body): Promise<User> => {
  const response = await fetch("http://localhost:8081/authenticate", {
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
