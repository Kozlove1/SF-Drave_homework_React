import * as React from "react";

import "../AboutUs/AboutUs.css"

import Link from "./Link";
import Image from "./Image";

function Footer (props){

    let linkContent = [
        {
          "href" : "#",
          "className" : "footer__socials__link",
          "content" :{
            "src" : "img/faceBook.png",
            "alt" :"facebook",
        },         }, {
          "href" : "#",
          "className" : "footer__socials__link",
          "content" :{
            "src" : "img/instagramm.png",
            "alt" : "instagramm",
        },        }, {
          "href" : "#",
          "className" : "footer__socials__link",
          "content" :{
              "src" : "img/vk.png",
              "alt" : "vkontakte",
          },
        },
    ];

    return(
        <>
            <footer className="footer">
                <div className="footer__copywright">© SkillDrive Inc. 2020</div>
                <div className="footer__socials">
                    {linkContent.map((linkContent) => <Link href={linkContent.href} className={linkContent.className}>
                    <Image src={linkContent.content.src} alt={linkContent.content.alt}/>
                    </Link>)}
                </div>
            </footer>
        </>
    );
};

export default Footer;