import * as Icon from "react-feather";
import Image from "next/image";

export default function Card(props) {
  return (
    <div className="card">
      <div className="intro">
        <Image
          src={`/contacts/${props.RollNo}.png`}
          alt={`Picture of ${props.Post}`}
          layout="responsive"
          height={500}
          width={500}
        />
        <span>{props.Name}</span>
      </div>

      <div className="card-content">
        <h3>
          {props.Post} {props.Contact != "" ? `| ${props.Contact}` : ""}
        </h3>
        <hr />
        {props.Post === "President" ? (
          <a href={props.Email} target="_blank" rel="noreferrer noopener">
            <Icon.Airplay />
          </a>
        ) : (
          <a href={`mailto:${props.Email}`} target="_blank" rel="noreferrer noopener">
            <Icon.Mail />
          </a>
        )}
      </div>
    </div>
  );
}
