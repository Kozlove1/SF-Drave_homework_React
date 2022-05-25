import * as React from "react";

import "../AboutUs/AboutUs.css";
import MainAboutUs from "./MainAboutUs";
import MainQuestions from "./MainQuestions";

function Header(props){

  let whatThePage = "";
  let children = props.children;

  


  function aboutUsPage () {
    whatThePage = 'aboutUs'
    console.log(children)
  };

  function questionsPage () {
    whatThePage = 'questions'
    return
  };
  
  
    
    return(
        <>
        <header className="head"><a className="head__logo"><img src="img/Logo.png" width="115px" height="28px" alt="Логотип"/></a>
      <div className="head__burger-menu"><img src="img/VectorBurger.png" alt="развернуть меню"/></div>
      <nav className="head__menu">
        <a className="head__menu-item" href="#" onClick={aboutUsPage}>О нас</a>
        <a className="head__menu-item" href="#" >Условия</a>
        <a className="head__menu-item" href="#" onClick={questionsPage}>Частые Вопросы</a>
        <button className="head__button" type="submit">Войти</button>
      </nav>
    </header>
  
        </>
    )
}

export default Header;