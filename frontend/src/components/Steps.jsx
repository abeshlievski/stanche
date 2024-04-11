import "./Steps.css";
import stepsImg from "../assets/steps-img.gif";
export default function Steps() {
  return (
    <section id="steps">
      <div id="steps-img">
        <img src={stepsImg} alt="" />
      </div>
      <div id="steps-text">
        <h1>Чекори:</h1>
        <ol>
          <li>
            <h5>Најави се</h5>
          </li>
          <li>
            <h5>Истражи огласи</h5>
          </li>
          <li>
            <h5>Одбери стан</h5>
          </li>
          <li>
            <h5>Најди цимер</h5>
          </li>
        </ol>
      </div>
    </section>
  );
}
