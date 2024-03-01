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
 * Authenticates a user by sending a POST request to the server.
 *
 * @param body - The body of the request, containing the details needed to login a user.
 *
 * @returns A promise that resolves to a user object from the server. If the server responds with an error,
 * the promise will be rejected with an Error object.
 *
 * @throws Will throw an Error if the server responds with a response.ok of false.
 */
export const authenticateUser = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("http://localhost:8081/authenticate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    const json = yield response.json();
    if (!response.ok) {
        throw new Error(`${json.message}`);
    }
    return json.message;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRlVXNlci5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIiwic291cmNlcyI6WyJhcGkvYXV0aGVudGljYXRlVXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFlQTs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxDQUFPLElBQVUsRUFBaUIsRUFBRTtJQUNsRSxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRTtRQUNqRSxNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRTtZQUNQLGNBQWMsRUFBRSxrQkFBa0I7U0FDbkM7UUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7S0FDM0IsQ0FBQyxDQUFDO0lBRUgsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN0QixDQUFDLENBQUEsQ0FBQyJ9