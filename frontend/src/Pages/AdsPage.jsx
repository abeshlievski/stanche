import "../components/Ads.css";
import { useEffect } from "react";
import { useAdsContext } from "../hooks/useAdsContext";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

import AdDetails from "../components/AdDetails";
const AdsPage = () => {
  const { user } = useAuthContext();
  const { ads, dispatch } = useAdsContext();

  useEffect(() => {
    const fetchAds = async () => {
      const response = await fetch("/api/ads");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_ADS", payload: json });
      }
    };

    fetchAds();
  }, [dispatch]);

  let content;
  if (user.role === "student") {
    content = (
      <button id="create-ad-btn">
        <Link to={"/events"} className="link-deco" style={{ color: "#146c94" }}>
          Барај Цимер
        </Link>
      </button>
    );
  }
  if (user.role === "izdavac") {
    content = (
      <>
        <button id="create-ad-btn">
          <Link to={"/createad"} style={{ textDecoration: "none" }}>
            Нов Оглас
          </Link>
        </button>
      </>
    );
  }

  return (
    <section id="ads-page">
      <div></div>
      {content}
      <div id="display-ads">
        {ads && ads.map((ad) => <AdDetails ad={ad} key={ad._id} />)}
      </div>
    </section>
  );
};

export default AdsPage;
