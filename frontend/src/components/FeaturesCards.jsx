import "./Features.css";

export default function FeaturesCards({ image, title }) {
  return (
    <div id="feature-card">
      <img src={image} alt="" />
      <h5>{title}</h5>
    </div>
  );
}
