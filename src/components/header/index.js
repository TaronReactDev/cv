import React from "react";
import "../style.scss";
import ContactInfo from "../contactInfo";


export default function Header({className}) {
    return (
        <aside className={className}>
            <div className="headerContainer">
                <h2 id="myName">Taron Sargsyan</h2>
                <h3 id="myPosition">Drupal developer
                </h3>
            </div>
            <ContactInfo/>
        </aside>
    );
}