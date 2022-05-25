import * as React from "react";

import "../AboutUs/AboutUs.css"

function Footer (props) {
    return(
        <>
        <footer className="footer">
      <div className="footer__copywright">© SkillDrive Inc. 2020</div>
      <div className="footer__socials">
        <a className="footer__socials__link" href="#"><img src="img/faceBook.png" alt="facebook"/></a>
        <a className="footer__socials__link" href="#"><img src="img/instagramm.png" alt="instagramm"/></a
        ><a className="footer__socials__link" href="#"><img src="img/vk.png" alt="vkontakte"/></a></div>
        </footer>
        </>
    );
}

export default Footer;