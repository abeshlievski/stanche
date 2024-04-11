import { useEffect } from "react";
import { useAdsContext } from "../hooks/useAdsContext";
import AdDetails from "../components/AdDetails";
const AdsPage = () => {
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

  return (
    <div className="home">
      <div className="ads">
        1{ads && ads.map((ad) => <AdDetails ad={ad} key={ad._id} />)}
      </div>
    </div>
  );
};

export default AdsPage;
