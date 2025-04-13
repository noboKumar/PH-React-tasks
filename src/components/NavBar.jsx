import { Menu, X } from "lucide-react";
import NavLink from "./NavLink";
import { useState } from "react";

const navData = [
  {
    name: "Home",
    url: "/",
    id: 1,
  },
  {
    name: "About",
    url: "/about",
    id: 2,
  },
  {
    name: "Services",
    url: "/services",
    id: 3,
  },
  {
    name: "Blog",
    url: "/blog",
    id: 4,
  },
  {
    name: "Contact",
    url: "/contact",
    id: 5,
  },
];

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex justify-between w-11/12 mx-auto my-8">
      <div>
        <div className="flex items-center gap-5">
          {toggle ? (
            <X onClick={() => setToggle(!toggle)} className="lg:hidden cursor-pointer"></X>
          ) : (
            <Menu
              onClick={() => setToggle(!toggle)}
              className="lg:hidden cursor-pointer"
            ></Menu>
          )}

          <h1 className="text-4xl ">Project Logo</h1>
        </div>
        <ul
          className={`text-xl lg:hidden absolute duration-500 bg-orange-700 ${
            toggle ? "top-20" : "-top-60"
          } rounded p-5`}
        >
          {navData.map((link) => (
            <NavLink key={link.id} link={link}></NavLink>
          ))}
        </ul>
      </div>
      <div>
        <ul className="text-2xl lg:flex items-center gap-5 hidden">
          {navData.map((link) => (
            <NavLink key={link.id} link={link}></NavLink>
          ))}
        </ul>
      </div>
      <button className="btn">SignUp</button>
    </div>
  );
};

export default NavBar;
