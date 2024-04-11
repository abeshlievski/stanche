import "../components/Register.css";
import { useState } from "react";
import buildingsImg from "../assets/buildings2.png";
export default function Register() {
  const [dob, setDob] = useState("2000-01-01");
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
  function handleDobChange(e) {
    setDob(e.target.value);
  }
  return (
    <section id="register-page">
      <div id="register">
        <h1>Регистрација</h1>
        <form action="">
          <div>
            <h5>Име</h5>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div>
            <h5>Презиме</h5>
            <input
              type="text"
              value={surname}
              onChange={handleSurnameChange}
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
            <h5>Година на раѓање</h5>
            <input
              type="date"
              value={dob}
              min="1980-01-01"
              max="2007-12-30"
              onChange={handleDobChange}
              required
            />
          </div>
          <div>
            <h5>Пол</h5>
            <div id="register-gender">
              <input
                type="radio"
                name="gender"
                value="male"
                onClick={handleGenderChange}
              />
              <label htmlFor="gender">Машко</label>
              <input
                type="radio"
                name="gender"
                value="female"
                onClick={handleGenderChange}
              />
              <label htmlFor="gender">Женско</label>
            </div>
          </div>
        </form>
        <div>
          <input
            type="submit"
            value="Продолжи"
            onClick={() =>
              console.log(name, surname, email, password, dob, gender)
            }
            className="submit-form"
          />
        </div>
      </div>
      <div id="register-heading">
        <img src={buildingsImg} alt="" />
      </div>
    </section>
  );
}
