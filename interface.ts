interface User {
  name: string;
  id: number;
  age: number;
  img: string;
}

// type UserKeys = keyof User; // 'name' | 'id' | 'age'

// export function getUserProp<T extends keyof User>(user: User, prop: T): User[T] {
//     return user[prop];
// }

export type { User };
