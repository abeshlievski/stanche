import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const HubPage = () => {
  const { user } = useAuthContext();
  let content;
  if (user.role === "izdavac") {
    content = (
      <button id="create-ad-btn">
        <Link to={"/ads"}>Разгледај огласи</Link>
      </button>
    );
  }
  if (user.role === "student") {
    content = (
      <button id="create-ad-btn">
        <Link to={"/events"}>Најди Цимер</Link>
      </button>
    );
  }
  return <div>{content}</div>;
};

export default HubPage;
