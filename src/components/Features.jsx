import "./Features.css";
import FeaturesCards from "./FeaturesCards";
import featureOne from "../assets/features-card1.png";
export default function Features() {
  return (
    <section id="features">
      <div id="features-title">
        <h1>title</h1>
      </div>
      <div id="features-cards">
        <FeaturesCards title="prv" image={featureOne} desc="loremipsum2020" />
        <FeaturesCards title="vtor" image={featureOne} desc="loremipsum2020" />
        <FeaturesCards title="tret" image={featureOne} desc="loremipsum2020" />
      </div>
    </section>
  );
}
