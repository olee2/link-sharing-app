export interface Body {
  email: string;
  password: string;
}

/**
 * Registers a new user by sending a POST request to the server.
 *
 * @param body - The body of the request, containing the details needed to register a new user.
 *
 * @returns A promise that resolves to a string message from the server. If the server responds with an error,
 * the promise will be rejected with an Error object.
 *
 * @throws Will throw an Error if the server responds with a response.ok of false.
 */
export const registerUser = async (body: Body): Promise<string> => {
  const response = await fetch("http://localhost:8081/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.message;
};
