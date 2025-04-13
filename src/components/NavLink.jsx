import React from "react";

const NavLink = ({ link }) => {
  return (
    <>
      <li className="cursor-pointer hover:bg-orange-400 px-5 py-1 rounded-xl">
        <a href={link.url}></a>
        {link.name}
      </li>
    </>
  );
};

export default NavLink;
