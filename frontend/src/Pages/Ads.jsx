import CreateAd from "../components/CreateAd";
import "../components/Ads.css";
export default function Ads() {
  return (
    // <CreateAd />
    <section id="ads-page">
      <div id="filter">
        <h1>filter</h1>
      </div>
      <div id="create-ads">
        <h1>create ad</h1>
      </div>
      <div id="display-ads">
        <div id="ad"></div>
      </div>
    </section>
  );
}
