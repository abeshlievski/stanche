import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import "../components/Hub.css";
const HubPage = () => {
  const { user } = useAuthContext();
  let content, content2;
  if (user.role === "izdavac") {
    content = (
      <button id="create-ad-btn">
        <Link to={"/ads"}>Разгледај огласи</Link>
      </button>
    );
  }
  if (user.role === "student") {
    content = (
      <button id="create-hub-btn">
        <Link to={"/events"} style={{ textDecoration: "none", color: "white" }}>
          Најди Цимер
        </Link>
      </button>
    );
    content2 = (
      <button id="create-hub-btn">
        <Link to={"/ads"} className="link-deco">
          Разгледај огласи
        </Link>
      </button>
    );
  }
  return (
    <section id="hub">
      <h1>Разгледајте текст нз шотие</h1>
      <div>
        <div id="hub-card">
          <h1>Сакаш цимер најди цимер нз шотие</h1>
          <div>{content}</div>;
        </div>
        <div id="hub-card">
          <h1>Сакаш стан најди НЗ ШОТИЕ</h1>
          <div>{content2}</div>;
        </div>
      </div>
    </section>
  );
};

export default HubPage;
