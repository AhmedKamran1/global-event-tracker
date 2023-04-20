import axios from "axios";

export const fetchData = async () => {
  // const url = "https://eonet.gsfc.nasa.gov/api/v2.1/categories/8?limit=15";
  const url = "https://eonet.gsfc.nasa.gov/api/v2.1/events";
  const {
    data: { events },
  } = await axios.get(url);
  return events;
};