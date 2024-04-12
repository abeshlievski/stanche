import { useEventsContext } from "../hooks/useEventsContext";
import { useAuthContext } from "../hooks/useAuthContext";

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
    <div>
      {user_id === event.user_id && <span onClick={handleClick}>delete</span>}
      <h1>{event.title}</h1>
      <h3></h3>
      <h2>Повеќе информации:{event.description}</h2>
      <span>Објавено од : {event.createdBy}</span>
      <p>
        {formatDistanceToNow(new Date(event.createdAt), { addSuffix: true })}
      </p>
    </div>
  );
};

export default EventDetails;
