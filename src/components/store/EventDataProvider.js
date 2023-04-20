import { useState, useEffect, useCallback } from "react";
import { fetchData } from "../../api/api";
import EventDataContext from "./EventData-Context";

export const EventDataProvider = (props) => {
  const [eventData, setEventData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [altitude, setAltitude] = useState({ lat: 41.869, lng: -100.31 });

  const fetchEventData = useCallback(async () => {
    setIsLoading(true);
    const data = await fetchData();
    setEventData(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchEventData();
  }, [fetchEventData]);

  const changeMapViewHandler = (altitude) => {
    setAltitude(altitude);
  };

  return (
    <EventDataContext.Provider
      value={{
        eventData: eventData,
        isLoading: isLoading,
        changeMapView: changeMapViewHandler,
        altitude: altitude,
      }}
    >
      {props.children}
    </EventDataContext.Provider>
  );
};
