import "./Features.css";
import FeaturesCards from "./FeaturesCards";
import featureOne from "../assets/features-card-1.png";
import featureTwo from "../assets/features-card-2.png";
import featureThree from "../assets/features-card-3.png";
export default function Features() {
  return (
    <section id="features">
      <div id="features-title">
        <h1>Можности</h1>
      </div>
      <div id="features-cards">
        <FeaturesCards title="Пронаоѓање на стан" image={featureOne} />
        <FeaturesCards title="Избор на цимери" image={featureTwo} />
        <FeaturesCards title="Објавување на оглас" image={featureThree} />
      </div>
    </section>
  );
}
