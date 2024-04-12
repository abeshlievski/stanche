import "./Start.css";
import { Link } from "react-router-dom";

export default function Start() {
  return (
    <section id="start">
      <div id="call-to-action">
        <div>
          <h1>Подготвени да започнете со барање?</h1>
        </div>
        <button>
          <Link to={"/hub"} className="link-to">
            Истражи
          </Link>
        </button>
      </div>
    </section>
  );
}
