import React from 'react';
import CardContainer from './card-ui'; 

export default function Card(props) {
  const classes =  props.className;
  return <CardContainer className={classes}>{props.children}</CardContainer>;
}
