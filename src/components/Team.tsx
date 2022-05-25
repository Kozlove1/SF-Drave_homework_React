import * as React from "react";

import "../AboutUs/AboutUs.css";

function Team_and_Question_board() {
    return(
    <>
      <h3>Команда</h3>
        <section className="team">
          <div className="team__column">
            <div className="team__personal-card">
                  <div className="team__personal-card__icon"><img className="team_icon" src="img/CEOman.png" alt="Фотография Ивана"/></div>
                  <div className="team__personal-card__name">Иван Иванов</div>
                  <div className="team__personal-card__proffesion">CEO</div>
            </div>
          </div>
          <div className="team__column">
            <div className="team__personal-card">
                <div className="team__personal-card__icon"><img className="team_icon" src="img/FrontMan.png" alt="Фотография Алексея"/></div>
                <div className="team__personal-card__name">Алексей Смирнов</div>
                <div className="team__personal-card__proffesion">Frontend-разработчик</div>
            </div>
          </div>
          <div className="team__column">
            <div className="team__personal-card">
                <div className="team__personal-card__icon"><img className="team_icon" src="img/BackMan.png" alt="Фотография Дениса"/></div>
                <div className="team__personal-card__name">Денис Ярцев</div>
                <div className="team__personal-card__proffesion">Backend-разработчик</div>
            </div>
          </div>
          <div className="team__column">
            <div className="team__personal-card">
                <div className="team__personal-card__icon"><img className="team_icon" src="img/DesignerMan.png" alt="Фотография Николая"/></div>
                <div className="team__personal-card__name">Николай Морозов</div>
                <div className="team__personal-card__proffesion">Дизайнер</div>
            </div>
          </div>
          <div className="team__column">
            <div className="team__personal-card">
                <div className="team__personal-card__icon"><img className="team_icon" src="img/CopyWriterWoman.png" alt="Фотография Ирины"/></div>
                <div className="team__personal-card__name">Ирина Деева</div>
                <div className="team__personal-card__proffesion">Копирайтер</div>
            </div>
          
          </div>
          <div className="team__column">
            <div className="team__personal-card">
                <div className="team__personal-card__icon"><img className="team_icon" src="img/SMmWoman.png" alt="Фотография Марии"/></div>
                <div className="team__personal-card__name">Мария Стрелкова</div>
                <div className="team__personal-card__proffesion">SMM</div>
            </div>
          </div>
        </section>
    </>
    );
};

export default Team_and_Question_board;