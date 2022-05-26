import * as React from "react";

import "../AboutUs/AboutUs.css";

import Link from "./Link";
import Image from "./Image";

function Header(props){

  let navLinksContent = [
  {
    "href" : "#",
    "content" : "О нас",
    "className" : "head__menu-item",
  }, {
    "href" : "#",
    "content" : "Условия",
    "className" : "head__menu-item",
  }, {
    "href" : "#",
    "content" : "Частые вопросы",
    "className" : "head__menu-item",
  },
];

    return(
        <>
        <header className="head"><Link className={"head__logo"} href={"#"} content={<Image src={"img/Logo.png"} alt={"Логотип"} width={"115px"} height={"28px"}/>}/>
          <div className="head__burger-menu">
          <Image src={"img/VectorBurger.png"} alt={"развернуть меню"}/>
          </div>
            <nav className="head__menu">
              {navLinksContent.map((linkContent) => <Link className={linkContent.className} href={linkContent.href} content={linkContent.content}/>)}
              <button className="head__button" type="submit">Войти</button>
            </nav>
    </header>
        </>
    );
};

export default Header;