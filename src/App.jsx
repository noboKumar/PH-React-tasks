import { Suspense } from "react";
import "./App.css";
import Counter from "./components/counter";
import ToggleText from "./components/toggle";
import UserData from "./components/userData";
import Customer from "./components/Customer";
import Friends from "./components/Friends";
import Input from "./components/input";
import NavBar from "./components/NavBar";

const users = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

// const fetchCustomer = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// };

// const fetchFriends = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// };

function App() {
  const fetchUser = users();
  // const customerPromise = fetchCustomer();
  // const friendsPromise = fetchFriends();
  return (
    <>
      <NavBar></NavBar>
      {/* <Counter></Counter> */}
      {/* <ToggleText></ToggleText> */}
      {/* <Input></Input> */}

      <Suspense fallback={<h1>Loading...</h1>}>
        <UserData fetchUser={fetchUser}></UserData>
      </Suspense>

      {/* <Suspense fallback={<h1>Loading...</h1>}>
        <Customer customerPromise={customerPromise}></Customer>
      </Suspense> */}

      {/* <Suspense fallback={<h1>Loading...</h1>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}
    </>
  );
}

export default App;
