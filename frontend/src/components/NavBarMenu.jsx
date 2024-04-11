import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBarMenu({ name, adress }) {
  return (
    <span id="navbar-link">
      <li>
        <Link to={adress}>{name}</Link>
      </li>
    </span>
  );
}
