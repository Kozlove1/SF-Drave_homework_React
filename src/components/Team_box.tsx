import * as React from "react";

import "../AboutUs/AboutUs.css";

import Image from "./Image";

function Team_box(props: {
  photo: string;
  alt: string;
  name: string;
  proffesion: string;
}) {
  return (
    <>
      <div className="team__column">
        <div className="team__personal-card">
          <div className="team__personal-card__icon">
            <Image className={"team_icon"} src={props.photo} alt={props.alt} />
          </div>
          <div className="team__personal-card__name">{props.name}</div>
          <div className="team__personal-card__proffesion">
            {props.proffesion}
          </div>
        </div>
      </div>
    </>
  );
}

export default Team_box;
