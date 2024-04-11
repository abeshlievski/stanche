import "./Header.css";
import headerImg from "../assets/header-img.png";
export default function Header() {
  return (
    <main id="header">
      <div id="header-text">
        <div>
          <h1>
            Пронајдете го вашето идеално станче, за поминување на вашите
            студентски денови.
          </h1>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
            odio earum aspernatur odit exercitationem eaque modi inventore
            itaque? Veritatis, quae.
          </p>
        </div>
      </div>
      <div id="header-img">
        <img src={headerImg} alt="" />
      </div>
    </main>
  );
}
