var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { authenticateUser } from "./api/authenticateUser";
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield authenticateUser({
        email: "admin@example.com",
        password: "verysecret"
    });
    const greeting = document.createElement("h1");
    greeting.textContent = `Hello ${user.first_name} ${user.last_name}`;
    document.body.appendChild(greeting);
});
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8iLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUxRCxNQUFNLElBQUksR0FBRyxHQUFTLEVBQUU7SUFDdEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxnQkFBZ0IsQ0FBQztRQUNsQyxLQUFLLEVBQUUsbUJBQW1CO1FBQzFCLFFBQVEsRUFBRSxZQUFZO0tBQ3ZCLENBQUMsQ0FBQztJQUVILE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxTQUFTLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3BFLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQSxDQUFDO0FBRUYsSUFBSSxFQUFFLENBQUMifQ==