import { useAdsContext } from "../hooks/useAdsContext";
import { useAuthContext } from "../hooks/useAuthContext";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const AdDetails = ({ ad }) => {
  const { dispatch } = useAdsContext();
  const { user } = useAuthContext();
  const user_id = user._id;

  const handleClick = async () => {
    const response = await fetch("/api/ads/" + ad._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_AD", payload: json });
    }
  };

  return (
    <div id="ad">
      <div>
        <img src={ad.img} alt="" />
      </div>
      <div className="ad-details">
        <h3>{ad.title}</h3>
        <h5>Локација: {ad.location} </h5>
        <h5> Тип на објект: {ad.type === "stan" ? "стан" : "куќа"}</h5>
        <h5>Опис: {ad.description}</h5>
        <h5>Квадратура: {ad.cube}cm2 </h5> <h5>Цена: {ad.price}$/месечно</h5>
        <span>Објавено од: {ad.createdBy}</span>
        <p>
          {formatDistanceToNow(new Date(ad.createdAt), { addSuffix: true })}
        </p>
      </div>
      {user_id === ad.user_id && (
        <span onClick={handleClick} className="delete-ad">
          Избриши
        </span>
      )}
    </div>
  );
};

export default AdDetails;
