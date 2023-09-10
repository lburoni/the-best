import CartWidget from "../cartwidget/cartwidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <h3>Ecommerce</h3>
      </Link>
      <div className="Categories">
        <NavLink
          to={`/category/consolas`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          consolas
        </NavLink>
        <NavLink
          to={`/category/juegos ps4`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          juegos ps4
        </NavLink>
        <NavLink
          to={`/category/juegos ps5`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          juegos ps5
        </NavLink>
        <NavLink
          to={`/category/juegos xbox`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          juegos xbox
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
