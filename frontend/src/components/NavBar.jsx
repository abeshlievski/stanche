import "./NavBar.css";
import logoImg from "../assets/logo-navbar.png";
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
      <div id="navbar-logo">
        <img src={logoImg} alt="" />
      </div>
      <div id="navbar-menu">
        <ul>
          <NavBarMenu name="Дома" adress="/" />
          <NavBarMenu name="Услуги" adress="/ads" />

          {user && (
            <div id="logged-in">
              <span id="nav-user-name">{user.email}</span>
              <button onClick={handleClick} id="logout-btn">
                Одјави се
              </button>
            </div>
          )}
          {!user && (
            <>
              <NavBarMenu name="Најава" adress="/login" />
            </>
          )}
        </ul>
      </div>
    </section>
  );
}
