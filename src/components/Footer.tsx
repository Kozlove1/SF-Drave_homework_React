import * as React from "react";

import "../AboutUs/AboutUs.css";

import Image from "./Image";

import "../img/social/faceBook.png";
import "../img/social/vk.png";
import "../img/social/instagramm.png";

function Footer(props: {}) {
  let linkContent = [
    {
      href: "https://ru-ru.facebook.com/",
      className: "footer__socials__link",
      content: {
        src: "img/faceBook.png",
        alt: "facebook",
      },
    },
    {
      href: "https://www.instagram.com/",
      className: "footer__socials__link",
      content: {
        src: "img/instagramm.png",
        alt: "instagramm",
      },
    },
    {
      href: "https://vk.com",
      className: "footer__socials__link",
      content: {
        src: "img/vk.png",
        alt: "vkontakte",
      },
    },
  ];

  return (
    <>
      <footer className="footer">
        <div className="footer__copywright">© SkillDrive Inc. 2020</div>
        <div className="footer__socials">
          {linkContent.map((linkContent) => (
            <a key ={linkContent.href} href ={linkContent.href} className={linkContent.className}>
              <Image
                src={linkContent.content.src}
                alt={linkContent.content.alt}
              />
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}

export default Footer;
