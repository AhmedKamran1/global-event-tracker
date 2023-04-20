import { Icon } from "@iconify/react";
import fireIcon from "@iconify/icons-mdi/fire-alert";
import stormIcon from "@iconify/icons-mdi/weather-storm";
import volcanoIcon from "@iconify/icons-mdi/eruption";
import icebergIcon from "@iconify/icons-mdi/image-filter-hdr";
import classes from "./EventList.module.css";
import Wrapper from "../Wrapper/Wrapper";
import { useContext } from "react";
import EventDataContext from "../store/EventData-Context";

const EventList = ({ id, eventData }) => {
  const eventContext = useContext(EventDataContext);
  const { title } = eventData;
  const iconType =
    id === 8
      ? fireIcon
      : id === 10
      ? stormIcon
      : id === 12
      ? volcanoIcon
      : id === 15
      ? icebergIcon
      : null;
  const classType =
    id === 8
      ? `${classes.fireicon}`
      : id === 10
      ? `${classes.stormicon}`
      : id === 12
      ? `${classes.volcanoicon}`
      : id === 15
      ? `${classes.icebergicon}`
      : null;

  const changeMapViewHandler = (eventData) => {
    const altitude = {
      lat: eventData.geometries[0].coordinates[1],
      lng: eventData.geometries[0].coordinates[0],
    };
    eventContext.changeMapView(altitude);
  };
  return (
    <Wrapper
      className={classes.listcontainer}
      onClick={changeMapViewHandler.bind(null, eventData)}
    >
      <Wrapper className={classes.icon}>
        <Icon icon={iconType} className={classType}></Icon>
      </Wrapper>
      <Wrapper className={classes.title}>
        <span>{title.slice(0, 50)}</span>
      </Wrapper>
    </Wrapper>
  );
};

export default EventList;
