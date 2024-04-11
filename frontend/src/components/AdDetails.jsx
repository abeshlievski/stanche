import { useAdsContext } from "../hooks/useAdsContext";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const AdDetails = ({ ad }) => {
  const { dispatch } = useAdsContext();

  const handleClick = async () => {
    const response = await fetch("/api/ads" + ad._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_AD", payload: json });
    }
  };

  return (
    <div className="ad-details">
      <h4>{ad.title}</h4>
      <h2>{ad.description}</h2>
      <p>{formatDistanceToNow(new Date(ad.createdAt), { addSuffix: true })}</p>
    </div>
  );
};

export default AdDetails;
