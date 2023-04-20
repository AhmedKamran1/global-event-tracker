import { useState, useContext, useEffect } from "react";
import Wrapper from "../Wrapper/Wrapper";
import classes from "./Event.module.css";
import EventList from "./EventList";
import EventDataContext from "../store/EventData-Context";
import ReactPaginate from "react-paginate";

const Event = ({ eventListHandler }) => {
  const eventContext = useContext(EventDataContext);
  const [eventId, setEventid] = useState();
  const filteredEventList = [];
  const [currentPage, setcurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  eventContext.eventData.map((event, index) => {
    if (
      eventId
        ? event.categories[0].id === eventId
        : event.categories[0].id === 8 ||
          event.categories[0].id === 10 ||
          event.categories[0].id === 12 ||
          event.categories[0].id === 15
    ) {
      filteredEventList.push(event);
    }
    return null;
  });
  const pageHandler = (page) => {
    setcurrentPage(page.selected + 1);
  };

  const eventChangeHandler = (event) => {
    setcurrentPage(1);
    eventListHandler(event.target.value);
    switch (event.target.value) {
      case "All Events":
        setEventid(null);
        break;
      case "Wildfire":
        setEventid(8);
        break;
      case "Storm":
        setEventid(10);
        break;
      case "Volcano":
        setEventid(12);
        break;
      case "Ice Berg":
        setEventid(15);
        break;
      default:
        setEventid(null);
        break;
    }
  };

  const eventList = filteredEventList
    .slice((currentPage - 1) * 15, currentPage * 15)
    .map((event, index) => {
      if (
        eventId
          ? event.categories[0].id === eventId
          : event.categories[0].id === 8 ||
            event.categories[0].id === 10 ||
            event.categories[0].id === 12 ||
            event.categories[0].id === 15
      ) {
        return (
          <EventList
            key={index}
            eventData={event}
            id={event.categories[0].id}
          />
        );
      }
      return null;
    });

  useEffect(() => {
    setTotalPage(Math.ceil(eventContext.eventData.length / 15));
  }, [eventContext.eventData.length]);

  useEffect(() => {
    setTotalPage(Math.ceil(filteredEventList.length / 15));
  }, [filteredEventList.length]);

  return (
    <Wrapper className={classes.container}>
      <Wrapper className={classes.eventdata}>
        <select className={classes.select} onChange={eventChangeHandler}>
          <option value="All Events" className={classes.option}>
            All Events
          </option>
          <option value="Wildfire" className={classes.option}>
            Wildfire
          </option>
          <option value="Volcano" className={classes.option}>
            Volcano
          </option>
          <option value="Storm" className={classes.option}>
            Storm
          </option>
          <option value="Ice Berg" className={classes.option}>
            Ice Berg
          </option>
        </select>
      </Wrapper>
      {eventContext.isLoading ? (
        <h1 style={{color: 'white'}}>Loading...</h1>
      ) : (
        <Wrapper className={classes.eventlist}>{eventList}</Wrapper>
      )}
      <ReactPaginate
        previousLabel={""}
        nextLabel={""}
        breakLabel={"..."}
        breakClassName={classes.breaklabel}
        pageCount={totalPage}
        marginPagesDisplayed={5}
        onPageChange={pageHandler}
        containerClassName={classes.pagecontainer}
        pageClassName={classes.page}
      ></ReactPaginate>
    </Wrapper>
  );
};

export default Event;
