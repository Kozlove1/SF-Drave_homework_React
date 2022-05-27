import * as React from "react";

import "../AboutUs/AboutUs.css";

import { Pages } from "./Pages";

import Link from "./Link";
import Image from "./Image";

import "../img/Logo.png";
import "../img/VectorBurger.png";

function Header(props: {
  currentPage: Pages;
  setCurrentPage: (page: Pages) => void;
}) {
  const navLinksContent = [
    {
      href: "#",
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
      href: "#",
      content: "Частые вопросы",
      className: "head__menu-item",
      pageId: Pages.questions,
    },
  ];

  return (
    <>
      <header className="head">
        <Link className={"head__logo"} href={"#"}>
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
              className={linkContent.className}
              href={linkContent.href}
              onClick={() => {
                linkContent.pageId
                  ? props.setCurrentPage(linkContent.pageId)
                  : null;
              }}
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
