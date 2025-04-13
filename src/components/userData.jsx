import React, { use } from "react";
import User from "./user";

const UserData = ({ fetchUser }) => {
  const users = use(fetchUser);
  return (
    <div className="space-y-6 w-11/12 mx-auto">
      <h1 className="text-3xl font-bold">users: {users.length}</h1>
      <div className="grid md:grid-cols-4 gap-5">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default UserData;
