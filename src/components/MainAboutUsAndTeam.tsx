import * as React from "react";

import "../AboutUs/AboutUs.css";

import Contacts_board from "./Contacts_board";
import Image from "./Image";
import Team_box from "./Team_box";
import VisibilitySensor from "react-visibility-sensor";


import "../img/TeamMember/BackMan.png";
import "../img/TeamMember/CEOman.png";
import "../img/TeamMember/CopyWriterWoman.png";
import "../img/TeamMember/DesignerMan.png";
import "../img/TeamMember/FrontMan.png";
import "../img/TeamMember/SMmWoman.png";
import "../img/undraw_team.png";

function MainAboutUs(props: {
  onChange: (isVisible: Boolean) => void;
}) {
  let teamMembers = [
    {
      name: "Иван Иванов",
      proffesion: "CEO",
      photo: "img/CEOman.png",
      alt: "Фотография Иван Иванов",
    },
    {
      name: "Алексей Смирнов",
      proffesion: "Frontend-разработчик",
      photo: "img/FrontMan.png",
      alt: "Фотография Алексей Смирнов",
    },
    {
      name: "Денис Ярцев",
      proffesion: "Backend-разработчик",
      photo: "img/BackMan.png",
      alt: "Фотография Денис Ярцев",
    },
    {
      name: "Николай Морозов",
      proffesion: "Дизайнер",
      photo: "img/DesignerMan.png",
      alt: "Фотография Николай Морозов",
    },
    {
      name: "Ирина Деева",
      proffesion: "Копирайтер",
      photo: "img/CopyWriterWoman.png",
      alt: "Фотография Ирина Деева",
    },
    {
      name: "Мария Стрелкова",
      proffesion: "SMM",
      photo: "img/SMmWoman.png",
      alt: "Фотография Мария Стрелкова",
    },
  ];

  return (
    <>
      <VisibilitySensor onChange={props.onChange}>
      <div className="drawTeam">
        <Image
          className={"drawTeam__img"}
          src={"img/undraw_team.png"}
          alt={"Картинка команды"}
        />
      </div>
      </VisibilitySensor>
      <h1>О нас</h1>
      <p className="about-us__info">
        Это учебный проект, созданный с целью получения боевого опыта в
        разработке настоящего живого веб-приложения. Этот сервис имитирует
        работу каршеринга, в котором можно не только арендовать автомобили, но и
        сдавать их в аренду.
      </p>
      <Contacts_board />
      <h3>Команда</h3>
      <section className="team">
        {teamMembers.map((members) => (
          <Team_box
            name={members.name}
            proffesion={members.proffesion}
            photo={members.photo}
            alt={members.alt}
          />
        ))}
      </section>
    </>
  );
}

export default MainAboutUs;
