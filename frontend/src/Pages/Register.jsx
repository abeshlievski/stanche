import "../components/Register.css";
import { useState } from "react";
import buildingsImg from "../assets/buildings2.jpg";
import { useSignup } from "../hooks/useSignup";
export default function Register() {
  const [dob, setDob] = useState("2000-01-01");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(name, surname, email, password, dob, gender);
  };
  return (
    <section id="register-page">
      <div id="register">
        <h1>Регистрација</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">
              <h5>Име</h5>
            </label>
            <br />
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              required
              id="name"
            />
          </div>
          <div>
            <label htmlFor="email">
              <h5>Презиме</h5>
            </label>
            <br />
            <input
              type="text"
              value={surname}
              onChange={handleSurnameChange}
              required
              id="surname"
            />
          </div>

          <div>
            <label htmlFor="email">
              <h5>Е-маил адреса</h5>
            </label>
            <br />
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">
              <h5>Лозинка</h5>
            </label>
            <br />
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
              id={password}
            />
          </div>
          <div>
            <label htmlFor="dob">
              <h5>Година на раѓање</h5>
            </label>
            <br />
            <input
              type="date"
              value={dob}
              min="1980-01-01"
              max="2007-12-30"
              onChange={handleDobChange}
              required
              id={dob}
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
          <div>
            <label htmlFor="type">
              <h5>Јас сум:</h5>
            </label>
            <select onChange={(e) => setRole(e.target.value)} className="role">
              <option value="student">Студент</option>
              <option value="izdavac">Издавач</option>
            </select>
          </div>
          <div>
            <button type="submit" disabled={isLoading} className="submit-form">
              Продолжи
            </button>
          </div>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
      <div id="register-heading">
        <img src={buildingsImg} alt="" />
      </div>
    </section>
  );
}
