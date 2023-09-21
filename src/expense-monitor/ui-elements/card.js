import "./card.css";
export default function Card(props) {
    
    const classes = 'card-container ' + props.className;
  return <div className={classes}> {props.children}</div>;
}
