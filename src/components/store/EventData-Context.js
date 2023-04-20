import React from "react";

const EventDataContext = React.createContext({
  isLoading: false,
  eventData: [],
  changeMapView: (altitude) => {},
  altitude: { lat: 41.869, lng: -100.31 },
});

export default EventDataContext;
