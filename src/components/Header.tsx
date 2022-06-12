import * as React from "react";

import "../AboutUs/AboutUs.css";

import { Pages } from "./Pages";

import { Link } from "react-router-dom";
import Image from "./Image";
import { ClassLists } from "./ClassLists";

import "../img/Logo.png";
import "../img/VectorBurger.png";

function Header(props: {
  currentPage: Pages;
  setCurrentPage: (page: Pages) => void;
  classNameHedeNoOpacity: ClassLists;
}) {
  const navLinksContent = [
    {
      href: "aboutUs",
      content: "О нас",
      className: "head__menu-item",
      pageId: Pages.aboutUs,
    },
    {
      href: "#",
      content: "Условия",
      className: "head__menu-item",
    },
    {
      href: "questions",
      content: "Частые вопросы",
      className: "head__menu-item",
      pageId: Pages.questions,
    },
  ];

  return (
    <>
      <header className={`${props.classNameHedeNoOpacity}`} >
        <Link to={"/"} className={"head__logo"}>
          <Image
            src={"img/Logo.png"}
            alt={"Логотип"}
            width={"115px"}
            height={"28px"}
          />
        </Link>
        <div className="head__burger-menu">
          <Image src={"img/VectorBurger.png"} alt={"развернуть меню"} />
        </div>
        <nav className="head__menu">
          {navLinksContent.map((linkContent) => (
            <Link
              key={linkContent.href}
              to={linkContent.href}
              className={linkContent.className}
            >
              {linkContent.content}
            </Link>
          ))}
          <button className="head__button" type="submit">
            Войти
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;
