import "./NavBar.css";

import { Link } from "react-router-dom";

export default function NavBarMenu({ name, adress }) {
  return (
    <span id="navbar-link">
      <li>
        <Link to={adress} className="link-to">
          {name}
        </Link>
      </li>
    </span>
  );
}
