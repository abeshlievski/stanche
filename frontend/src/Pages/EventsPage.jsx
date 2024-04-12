import { useEffect } from "react";
import { useEventsContext } from "../hooks/useEventsContext";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import EventDetails from "../components/EventDetails";

const EventsPage = () => {
  const { user } = useAuthContext();
  const { events, dispatch } = useEventsContext();
  if (user.role === "izdavac") {
    return <div className="error">ЗАБРАНЕТ ПРИСТАП</div>;
  }
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("/api/events");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_EVENTS", payload: json });
      }
    };

    fetchEvents();
  }, [dispatch]);

  return (
    <section id="ads-page">
      <div id="filter">
        <button id="create-ad-btn">
          <Link to={"/createevent"}>Барај Цимер</Link>
        </button>
      </div>
      <div id="display-ads">
        {events &&
          events.map((event) => <EventDetails event={event} key={event._id} />)}
      </div>
    </section>
  );
};

export default EventsPage;
