import Wrapper from "../Wrapper/Wrapper";
import classes from "./LocationInfoBox.module.css"

const LocationInfoBox = ({ info }) => {
  
  return (
    <Wrapper className={classes.locationinfo}>
      <h2>Event Location Information</h2>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          Title: <strong>{info.title}</strong>
        </li>
      </ul>
    </Wrapper>
  );
};

export default LocationInfoBox;
