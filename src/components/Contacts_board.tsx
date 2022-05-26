import * as React from "react";

import "../AboutUs/AboutUs.css";


function Contacts_board (props) {
    return(
        <>
        <section className="contacts">
        <h2>Контакты</h2>
        <div className="contacts__container">
          <div className="contacts__telephone">
            <p className="contacts__telephone__text">Телефон:</p>
            <p className="contacts__telephone__item">+7 921 185-45-91</p>
            <p></p>
          </div>
          <div className="contacts__trait"></div>
          <div className="contacts__email">
            <p className="contacts__email__text">Электронная Почта</p>
            <p className="contacts__email__item">drive@skillfactory.com</p>
          </div>
        </div>
      </section>
        </>
    );

};

export default Contacts_board;