import * as Icon from "react-feather";
import Router from "next/router";

export default function Card(props) {
  return (
    <div className="card" onClick={() => Router.push(`/societies/${props.shortform}`)}>
      <div className="intro">
        <img src={require(`../public/societies/${props.shortform}.png`)} alt={`Picture of ${props.name}`} />
      </div>

      <div className="card-content">
        <h3>{props.name}</h3>
        <hr />
        <a href={props.facebook_link} target="_blank" rel="noreferrer noopener">
          <Icon.Facebook />
        </a>
      </div>
    </div>
  );
}
