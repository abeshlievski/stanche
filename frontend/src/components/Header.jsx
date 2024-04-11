import "./Header.css";
import headerImg from "../assets/header-img.png";
export default function Header() {
  return (
    <main id="header">
      <div id="header-text">
        <div>
          <h1>
            Пронајдете го вашето идеално <span>станче</span>, за испишување на
            вашите најубави <span> студентски</span> приказни.
          </h1>
        </div>
        <div></div>
      </div>
      <div id="header-img">
        <img src={headerImg} alt="" />
      </div>
    </main>
  );
}
