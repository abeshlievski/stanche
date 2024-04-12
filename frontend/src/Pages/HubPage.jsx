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
      <h2>
        "Домот не е само кров над глава, тоа е место каде се раѓаат спомени,
        каде се забораваат заболените денови и каде се развива срцето."
      </h2>
      <div>
        <div id="hub-card">
          <h5>
            Оставете го стресот на страна и започнете ја својата потрага на
            идеален цимер со нас - сè тоа е само еден клик далеку.
          </h5>
          <div>{content}</div>
        </div>
        <div id="hub-card">
          <h5>
            Објавете го вашиот оглас со лесност и брзина. Започнете со
            објавување денес и пронајдете го вашиот идеален купувач!
          </h5>
          <div>{content2}</div>
        </div>
      </div>
    </section>
  );
};

export default HubPage;
