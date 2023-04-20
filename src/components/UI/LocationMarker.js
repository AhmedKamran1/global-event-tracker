import React from "react";
import { Icon } from "@iconify/react";
import classes from "./LocationMarker.module.css";
import Wrapper from "../Wrapper/Wrapper";

const LocationMarker = ({ colorType,  iconType, onClick }) => {
  return (
    <Wrapper className={classes.locationmarker} onClick={onClick}>
      <Icon icon={iconType} style={{color: colorType , fontSize: '2rem'}}></Icon>
    </Wrapper>
  );
};

export default LocationMarker;
