import "./Navbar.css";
import { Item } from "./Item/Item.jsx";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Item text="About" />
      <Item text="Services" />
      <Item text="Contact" />
    </div>
  );
};
