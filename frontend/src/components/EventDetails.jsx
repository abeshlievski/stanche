import { useEventsContext } from "../hooks/useEventsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import "./Events.css";
// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const EventDetails = ({ event }) => {
  const { dispatch } = useEventsContext();
  const { user } = useAuthContext();
  const user_id = user._id;

  const handleClick = async () => {
    const response = await fetch("/api/events/" + event._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_EVENT", payload: json });
    }
  };

  return (
    <div id="event-card">
      <h1>{event.title}</h1>
      <h5>Опис: {event.description}</h5>

      <div>
        <h5>Карактеристики:</h5>
        <ul id="card-traits">
          {event.tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
      </div>
      <div id="card-desc-time">
        <span>Објавено од : {event.createdBy}</span>
        <p>
          {formatDistanceToNow(new Date(event.createdAt), { addSuffix: true })}
        </p>
      </div>
      {user_id === event.user_id && (
        <span onClick={handleClick} className="delete-ad">
          Избриши
        </span>
      )}
    </div>
  );
};

export default EventDetails;
