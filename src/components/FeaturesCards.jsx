import "./Features.css";

export default function FeaturesCards({ image, title, desc }) {
  return (
    <div id="feature-card">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
