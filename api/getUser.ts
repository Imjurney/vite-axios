import { User } from "../interface";
export function createMockUser(): User {
  return {
    name: "John Doe",
    id: 1,
    age: 30,
  };
}
