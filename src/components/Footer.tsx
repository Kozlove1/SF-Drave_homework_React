import * as React from "react";

import "../AboutUs/AboutUs.css"

import Link from "./Link";
import Image from "./Image";

function Footer (props){

    let linkContent = [
        {
          "href" : "#",
          "className" : "footer__socials__link",
          "content" : <Image src={"img/faceBook.png"} alt={"facebook"}/>,
        }, {
          "href" : "#",
          "className" : "footer__socials__link",
          "content" : <Image src={"img/instagramm.png"} alt={"instagramm"}/>,
        }, {
          "href" : "#",
          "className" : "footer__socials__link",
          "content" : <Image src={"img/vk.png"} alt={"vkontakte"}/>,
        },
    ];
    
//     let imgContent =[
//     {
//         "src" : "img/faceBook.png",
//         "alt" :"facebook",
//     }, 
//     {
//         "src" : "img/instagramm.png",
//         "alt" : "instagramm",
//     }, 
//     {
//         "src" : "img/vk.png",
//         "alt" : "vkontakte",
//     },
// ];

// imgContent.map((imgContent) => <Image src={imgContent.src} alt={imgContent.alt}/>)


    return(
        <>
            <footer className="footer">
                <div className="footer__copywright">© SkillDrive Inc. 2020</div>
                <div className="footer__socials">
                    {linkContent.map((linkContent) => <Link href={linkContent.href} className={linkContent.className} content={linkContent.content}/>)}
                </div>
            </footer>
        </>
    );
};

export default Footer;