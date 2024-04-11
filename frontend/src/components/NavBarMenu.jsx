import "./NavBar.css";
export default function NavBarMenu({ name }) {
  return (
    <span id="navbar-link">
      <li>{name}</li>
    </span>
  );
}
