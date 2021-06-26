import * as Icon from "react-feather";
import Router from "next/router";
import ImageModal from "./imageModal";

export default function Card(props) {
  return (
    <div
      className="card"
      // onClick={() => Router.push(`/societies/${props.shortform}`)}
    >
      <div className="intro">
        <ImageModal
          images={`/committees/${props.shortform}.png`}
          description={props.description}
          title={props.name}
          Heads={props.Heads}
        />
        {/* <img src={require(`../public/societies/${props.shortform}.png`)} alt={`Picture of ${props.name}`} /> */}
      </div>

      <div className="card-content">
        <h3>{props.name}</h3>
        <hr />
      </div>
    </div>
  );
}
