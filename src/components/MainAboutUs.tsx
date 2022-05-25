import * as React from "react";

import "../AboutUs/AboutUs.css";

function MainAboutUs () {
    return(
        <>
            <div className="drawTeam"><img className="drawTeam__img" src="img/undraw_team.png" alt="Картинка команды"/></div>
              <h1>О нас</h1>
                  <p className="about-us__info">
                        Это учебный проект, созданный с целью получения боевого опыта в разработке настоящего живого веб-приложения.
                        Этот сервис имитирует работу каршеринга, в котором можно не только арендовать автомобили, но и сдавать их в аренду.
                  </p> 
        </>
    );
};

export default MainAboutUs;