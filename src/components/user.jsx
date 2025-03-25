import React from "react";

const User = ({ user }) => {
  console.log(user);
  const { name, address:{city} } = user;
  return (
    <div>
      <h2>User Name: {name}</h2>
      <h3>Address: {city}</h3>
    </div>
  );
};

export default User;
