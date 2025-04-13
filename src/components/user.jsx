import React from "react";

const User = ({ user }) => {
  const { name, address:{city} } = user;
  return (
    <div className="border-2 rounded-2xl p-8">
      <h2 className="text-2xl">User Name: {name}</h2>
      <h3 className="text-xl">Address: {city}</h3>
    </div>
  );
};

export default User;
