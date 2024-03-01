var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
export const registerUser = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("http://localhost:8081/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    const json = yield response.json();
    if (!response.ok) {
        throw new Error(json.message);
    }
    return json.message;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJVc2VyLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8iLCJzb3VyY2VzIjpbImFwaS9yZWdpc3RlclVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0E7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLENBQU8sSUFBVSxFQUFtQixFQUFFO0lBQ2hFLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLDhCQUE4QixFQUFFO1FBQzNELE1BQU0sRUFBRSxNQUFNO1FBQ2QsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQztRQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztLQUMzQixDQUFDLENBQUM7SUFFSCxNQUFNLElBQUksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVuQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDdEIsQ0FBQyxDQUFBLENBQUMifQ==