import React, { use } from "react";

const Friends = ({ friendsPromise }) => {
  const friends = use(friendsPromise);
  return (
    <div>
      <h1>Friends: {friends.length}</h1>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
};

const Friend = ({ friend }) => {
  const { name, email } = friend;
  return (
    <div>
      <h2>name: {name}</h2>
      <h2>email: {email}</h2>
    </div>
  );
};
export default Friends;
