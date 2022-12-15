import React from "react";
import Insta from "./img/footerIcon/Vector.svg";
import Twitter from "./img/footerIcon/akar-icons_twitter-fill.svg";
import Youtube from "./img/footerIcon/akar-icons_video.svg";

export default function FooterTravel() {

    const social =[Insta,Twitter, Youtube];

    const socialIcons = social.map((el)=> <img src={el}/>)

    return (
        <footer className="footer">
            <span>All Rights Reserved © Travel Portal</span>
            <span> {socialIcons}</span>
        </footer>
    )
}