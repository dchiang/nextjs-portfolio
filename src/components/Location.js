import { library } from "@fortawesome/fontawesome-svg-core";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PortfolioContext } from "../context/PortfolioContext";
import { useContext } from "react";

library.add(faMapMarkerAlt);

const Location = (props) => {
  const { portfolio } = useContext(PortfolioContext);
  return (
    <p>
      <FontAwesomeIcon
        className="mr-1"
        icon={"map-marker-alt"}
        width="13"
        height="13"
      />
      {portfolio.profile.location}
    </p>
  );
};

export default Location;
