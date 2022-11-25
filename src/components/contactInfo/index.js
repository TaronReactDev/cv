import React, {useState} from "react";
import "../style.scss";


export default function ContactInfo(props) {

    const info = {
        "Cell": "+37455383855",
        "Email": "sargsyan.taron@yahoo.com",
        "Linkedin": "https://www.linkedin.com/in/taron-sargsyan-3226a2200/",
        "GitHub": "https://github.com/TaronReactDev",
        "Address": " Nor Nork community, H. Avetisyan 12 building, flat N9, Yerevan, Armenia ",
    }


    const infoEntries =Object.entries(info);
    const contactInfo = infoEntries.map((el,i) => {
      return  <li className="contactInfoLi" >
          <p> {el[0] + ": "}</p>
          <span>{el[1]}</span>
        </li>
    })

    return (

        <ul className="contactInfoContainer">
            {
                contactInfo
            }
        </ul>

    );
}