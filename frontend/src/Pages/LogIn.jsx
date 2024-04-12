import "../components/LogIn.css";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link, useNavigate } from "react-router-dom";
import buildingsImg from "../assets/buildings.jpg";
export default function LogIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate("/hub");
  };
  return (
    <section id="log-in-page">
      <div id="login-heading">
        <img src={buildingsImg} alt="" />
      </div>

      <div id="log-in">
        <h1>Најава</h1>
        <form onSubmit={handleSubmit} noValidate>
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
            <button type="submit" disabled={isLoading} className="submit-form">
              Продолжи
            </button>
            {error && <div className="error">{error}</div>}
          </div>
        </form>
        <p>
          Немате акаунт? <Link to={"/register"}>Регистрација</Link>
        </p>
      </div>
    </section>
  );
}
