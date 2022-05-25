import * as React from "react";

import "../AboutUs/AboutUs.css";


function Question_box () {
    return(
        <>
    <section className="questions">
        <div className="questions__container">
          <button className="questions__box-collapsible" type="button"><img className="questions__answer-button-down" src="img/Down.png" alt="раскрыть ответ"/><img className="questions__answer-button-up" src="img/Up.png" alt="свернуть ответ"/></button>
            <div className="questions__answer-box">
              <p className="questions__answer-text"></p>
            </div>
            <button className="questions__box-collapsible" type="button"><img className="questions__answer-button-down" src="img/Down.png" alt="раскрыть ответ"/><img className="questions__answer-button-up" src="img/Up.png" alt="свернуть ответ"/></button>
            <div className="questions__answer-box">
              <p className="questions__answer-text"></p>
            </div>
            <button className="questions__box-collapsible" type="button"><img className="questions__answer-button-down" src="img/Down.png" alt="раскрыть ответ"/><img className="questions__answer-button-up" src="img/Up.png" alt="свернуть ответ"/></button>
            <div className="questions__answer-box">
              <p className="questions__answer-text"></p>
            </div>
            <button className="questions__box-collapsible" type="button"><img className="questions__answer-button-down" src="img/Down.png" alt="раскрыть ответ"/><img className="questions__answer-button-up" src="img/Up.png" alt="свернуть ответ"/></button>
            <div className="questions__answer-box">
              <p className="questions__answer-text"></p>
            </div>
            <button className="questions__box-collapsible" type="button"><img className="questions__answer-button-down" src="img/Down.png" alt="раскрыть ответ"/><img className="questions__answer-button-up" src="img/Up.png" alt="свернуть ответ"/></button>
            <div className="questions__answer-box">
              <p className="questions__answer-text"></p>
            </div>
            <button className="questions__box-collapsible" type="button"><img className="questions__answer-button-down" src="img/Down.png" alt="раскрыть ответ"/><img className="questions__answer-button-up" src="img/Up.png" alt="свернуть ответ"/></button>
            <div className="questions__answer-box">
              <p className="questions__answer-text"></p>
            </div>
        </div>
    </section>
        </>
    );
};

export default Question_box;