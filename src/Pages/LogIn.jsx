import "../components/LogIn.css";
import { useState } from "react";
import mapImg from "../assets/map.png";
import buildingsImg from "../assets/buildings.jpg";
export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  return (
    <section id="log-in-page">
      <div id="login-heading">
        <img src={buildingsImg} alt="" />
      </div>

      <div id="log-in">
        <h1>Најава</h1>
        <form action="">
          <div>
            <h5>Е-маил адреса</h5>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <h5>Лозинка</h5>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div>
            <input
              type="submit"
              value="Продолжи"
              onClick={() => console.log(email, password)}
              className="submit-form"
            />
          </div>
        </form>
        <p>
          Немате акаунт? <span>Регистрација</span>
        </p>
      </div>
    </section>
  );
}
