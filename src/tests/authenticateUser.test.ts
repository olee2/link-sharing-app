import { authenticateUser, User } from "../api/authenticateUser";

const mockUser: User = {
  id: 1,
  email: "test@test.com",
  first_name: "Test",
  last_name: "Tester",
  active: 1,
  created_at: new Date(),
  updated_at: new Date()
};

// Ensure the structure matches what authenticateUser expects
const mockSuccessResponse = { data: mockUser };

const mockJsonPromise = Promise.resolve(mockSuccessResponse);

const mockFetchPromise = Promise.resolve({
  ok: true,
  json: () => mockJsonPromise
});

// Type casting to ensure TypeScript compatibility
global.fetch = jest
  .fn()
  .mockImplementation(() => mockFetchPromise) as jest.Mock;

describe("User authentication", () => {
  // Reset the mock before each test to ensure a clean environment
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it("should authenticate a user successfully and return user data", async () => {
    const user: User = await authenticateUser({
      email: "test@test.com",
      password: "secret"
    });

    // Verify fetch was called correctly
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:8081/authenticate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: "test@test.com",
          password: "secret"
        })
      }
    );

    // Ensure the user is defined and matches the mock data
    expect(user).toBeDefined();
    expect(user).toEqual(mockUser);
  });
});
