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

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export type { User, Product };
