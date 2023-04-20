import GoogleMapReact from "google-map-react";
import classes from "./Map.module.css";
import LocationInfoBox from "../UI/LocationInfoBox";
import Event from "../Event-List/Event";
import LocationMarker from "../UI/LocationMarker";
import { useContext, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import fireIcon from "@iconify/icons-mdi/fire-alert";
import stormIcon from "@iconify/icons-mdi/weather-storm";
import volcanoIcon from "@iconify/icons-mdi/eruption";
import icebergIcon from "@iconify/icons-mdi/image-filter-hdr";
import EventDataContext from "../store/EventData-Context";

const Map = ({ center, zoom }) => {
  const eventContext = useContext(EventDataContext);

  const [locationinfo, setLocationInfo] = useState(null);
  const [eventType, setEventType] = useState("All Events");

  const locationInfoHandler = (event) => {
    setLocationInfo(event);
  };

  const eventListHandler = (eventType) => {
    setEventType(eventType);
  };

  const fireMarkers = eventContext.eventData.map((event, index) => {
    if (event.categories[0].id === 8) {
      return (
        <LocationMarker
          key={index}
          lat={event.geometries[0].coordinates[1]}
          lng={event.geometries[0].coordinates[0]}
          iconType={fireIcon}
          colorType={"darkorange"}
          onClick={locationInfoHandler.bind(null, event)}
        ></LocationMarker>
      );
    }
    return null;
  });

  const stormMarkers = eventContext.eventData.map((event, index) => {
    if (event.categories[0].id === 10) {
      return (
        <LocationMarker
          key={index}
          lat={event.geometries[0].coordinates[1]}
          lng={event.geometries[0].coordinates[0]}
          iconType={stormIcon}
          colorType={"darkblue"}
          onClick={locationInfoHandler.bind(null, event)}
        ></LocationMarker>
      );
    }
    return null;
  });

  const volcanoMarkers = eventContext.eventData.map((event, index) => {
    if (event.categories[0].id === 12) {
      return (
        <LocationMarker
          key={index}
          lat={event.geometries[0].coordinates[1]}
          lng={event.geometries[0].coordinates[0]}
          iconType={volcanoIcon}
          colorType={"red"}
          onClick={locationInfoHandler.bind(null, event)}
        ></LocationMarker>
      );
    }
    return null;
  });

  const icebergMarkers = eventContext.eventData.map((event, index) => {
    if (event.categories[0].id === 15) {
      return (
        <LocationMarker
          key={index}
          lat={event.geometries[0].coordinates[1]}
          lng={event.geometries[0].coordinates[0]}
          iconType={icebergIcon}
          colorType={"lightblue"}
          onClick={locationInfoHandler.bind(null, event)}
        ></LocationMarker>
      );
    }
    return null;
  });

  return (
    <Wrapper className={classes.container}>
      <Wrapper className={classes.map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBq9ReJWU2CanSEjAj0ee5ZPq4y-ZDBKbU" }}
          defaultCenter={center}
          center={eventContext.altitude}
          defaultZoom={zoom}
        >
          {eventContext.isLoading ? (
            <Wrapper className={classes.loading}>
              <h1>Loading...</h1>
            </Wrapper>
          ) : null}
          {(eventType === "All Events" || eventType === "Wildfire") &&
            fireMarkers}
          {(eventType === "All Events" || eventType === "Storm") &&
            stormMarkers}
          {(eventType === "All Events" || eventType === "Volcano") &&
            volcanoMarkers}
          {(eventType === "All Events" || eventType === "Ice Berg") &&
            icebergMarkers}
        </GoogleMapReact>
        {locationinfo && <LocationInfoBox info={locationinfo} />}
      </Wrapper>
      <Wrapper className={classes.eventform}>
        <Event eventListHandler={eventListHandler} />
      </Wrapper>
    </Wrapper>
  );
};

Map.defaultProps = {
  center: {
    lat: 41.869,
    lng: -100.31,
  },
  zoom: 5,
};
export default Map;
