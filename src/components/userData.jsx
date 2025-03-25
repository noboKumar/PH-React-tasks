import React, { use } from "react";
import User from "./user";

const UserData = ({ fetchUser }) => {
  const users = use(fetchUser);
  return (
    <div>
      <h1>users: {users.length}</h1>
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
};

export default UserData;
