import "./NavBar.css";
import NavBarMenu from "./NavBarMenu";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function NavBar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    console.log(" SE ODJAVIVTE ");
    logout();
  };
  return (
    <section id="nav-bar">
      <div id="navbar-menu">
        <ul>
          <NavBarMenu name="Дома" adress="/" />
          <NavBarMenu name="Услуги" adress="/ads" />
        </ul>
      </div>
      <div id="navbar-logo">
        <h1>Станче</h1>
      </div>
      <div id="navbar-login">
        <ul>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Одјави се</button>
            </div>
          )}
        </ul>
        {!user && (
          <ul>
            <NavBarMenu name="Најава" adress="/login" />
            <NavBarMenu name="Регистрација" adress="/register" />
          </ul>
        )}
      </div>
    </section>
  );
}
