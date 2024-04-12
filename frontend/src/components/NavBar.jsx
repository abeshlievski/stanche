import "./NavBar.css";
import logoImg from "../assets/logo-navbar.png";
import NavBarMenu from "./NavBarMenu";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function NavBar() {
  const { logout } = useLogout();
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
    navigate("/");
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
              <span id="nav-user-name">Здраво, {user.name}</span>
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
