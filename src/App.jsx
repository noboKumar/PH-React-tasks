import { Suspense } from "react";
import "./App.css";
import Counter from "./components/counter";
import ToggleText from "./components/toggle";
import UserData from "./components/userData";

const users = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

function App() {
  const fetchUser = users();
  return (
    <>
      <Counter></Counter>
      <ToggleText></ToggleText>
      <Suspense fallback={<h1>Loading...</h1>}>
        <UserData fetchUser={fetchUser}></UserData>
      </Suspense>
    </>
  );
}

export default App;
