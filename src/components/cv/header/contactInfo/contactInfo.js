import React from "react";
import "../../../style.scss";


export default function ContactInfo() {
    return (
<address>
        <ul className="contactInfoContainer">
            <li className="contactInfoLi" > Cell: <a  href="tel:+37455383855">+37455383855 </a></li>
            <li className="contactInfoLi" > Email: <a href = "mailto: sargsyan.taron@yahoo.com">sargsyan.taron@yahoo.com</a> </li>
            <li className="contactInfoLi" > Linkedin: <a href=" https://www.linkedin.com/in/taron-sargsyan-3226a2200/">Taron Sargsyan</a> </li>
            <li className="contactInfoLi" > GitHub: <a href="https://github.com/TaronReactDev">TaronReactDev</a></li>
            <li className="contactInfoLi" >  Address:  Nor Nork community, H. Avetisyan 12 building, flat N9, Yerevan, Armenia </li>
        </ul>
</address>
    );
}