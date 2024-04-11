import "./NavBar.css";
import NavBarMenu from "./NavBarMenu";
export default function NavBar() {
  return (
    <section id="nav-bar">
      <div id="navbar-menu">
        <ul>
          <NavBarMenu name="Дома" />
          <NavBarMenu name="Услуги" />
        </ul>
      </div>
      <div id="navbar-logo">
        <h1>Станче</h1>
      </div>
      <div id="navbar-login">
        <ul>
          <NavBarMenu name="Најава" />
          <NavBarMenu name="Регистрација" />
        </ul>
      </div>
    </section>
  );
}
