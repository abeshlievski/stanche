import "../components/Register.css";
import { useState } from "react";
import buildingsImg from "../assets/buildings.jpg";
export default function Register() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleSurnameChange(e) {
    setSurname(e.target.value);
  }
  function handleGenderChange(e) {
    setGender(e.target.value);
  }
  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }
  return (
    <section id="register-page">
      <div id="register">
        <h1>Регистрација</h1>
        <form action="">
          <div className="name-surname">
            <h5>Име</h5>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              required
            />
            <h5>Презиме</h5>
            <input
              type="text"
              value={surname}
              onChange={handleSurnameChange}
              required
            />
          </div>
          <div>
            <h5>Username</h5>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
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
      </div>
      <div id="register-heading">
        <img src={buildingsImg} alt="" />
      </div>
    </section>
  );
}
