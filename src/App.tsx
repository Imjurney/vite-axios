import { useEffect, useState } from "react";
import styled from "styled-components";

import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { User } from "../interface";

import Card from "./components/Card";

const mock = new AxiosMockAdapter(axios);
function App() {
  const [count, setCount] = useState(0);
  const [bestUser, setBestUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  mock.onGet("/api/counter").reply(200, { value: 2 });
  mock.onPost("/api/counter").reply(200, { value: 3 });
  mock.onGet("/api/users").reply(200, {
    users: [
      {
        id: 1,
        name: "John Doe",
        age: 30,
        img: "https://picsum.photos/200/300/?blur",
      },
      {
        id: 2,
        name: "Jane Doe",
        age: 25,
        img: "https://picsum.photos/200/300/?blur",
      },
      {
        id: 3,
        name: "John Smith",
        age: 40,
        img: "https://picsum.photos/200/300/?blur",
      },
      {
        id: 4,
        name: "Jane Smith",
        age: 35,
        img: "https://picsum.photos/200/300/?blur",
      },
    ],
  });

  mock.onGet("/api/user", { params: { id: 1 } }).reply(200, {
    id: 1,
    name: "John Doe",
    age: 30,
    img: "https://picsum.photos/200/300/?blur",
  });

  const fetchCounter = async () => {
    const response = await axios.get("/api/counter");
    setCount(response.data.value);
  };

  const postCounter = async () => {
    const response = await axios.post("/api/counter");
    setCount(response.data.value);
  };

  const fetchUsers = async () => {
    const response = await axios.get("/api/users");
    const users: User[] = response.data.users;
    setUsers(users);
  };

  const fetchBestUser = async () => {
    const response = await axios.get("/api/user", { params: { id: 1 } });
    const user: User = response.data;
    setBestUser(user);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Section>
      <Button type="button" onClick={() => fetchCounter()}>
        counter: {count}
      </Button>
      <Button type="button" onClick={() => postCounter()}>
        increment {count}
      </Button>
      <BestSection>
        <BestButton type="button" onClick={() => fetchBestUser()}>
          베스트 유저 보기
        </BestButton>
        {bestUser && <Card isBest={bestUser !== null} {...bestUser} />}
      </BestSection>
      <CardList>
        {users.map((user) => (
          <Card isBest={false} {...user} key={user.id} />
        ))}
      </CardList>
    </Section>
  );
}

const Section = styled.section`
  max-width: 50vw;
  margin: 0 auto;
`;

const BestSection = styled.section`
  margin-top: 16px;
  margin-bottom: 32px;
  border-top: 1px solid #ccc;
`;

const CardList = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(2, 1fr);
`;

const BestButton = styled.button`
  background: #f8d7da;
  border: none;
  border-radius: 4px;
  color: #721c24;
  font-size: 16px;
  padding: 8px 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  cursor: pointer;
`;
const Button = styled.button`
  background: #61dafb;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  padding: 8px 16px;
  margin-top: 16px;
  cursor: pointer;
`;

export default App;
