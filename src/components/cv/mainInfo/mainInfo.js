import React, {useState} from "react";
import InfoSection from "./infoSection";
import "../../style.scss";


export default function MainInfo({className}) {

    const infoContainerObjectiv = {
        "containerTitle": "Objectiv",
        "infoArr": [
            {
                "subTitle": "Searching for new opportunities and interests connected with IT",
            },

        ]
    }

    const infoContainerEducation = {
        "containerTitle": "Education",
        "infoArr": [
            {
                "title": "University",
                "subTitle": "National University of Architecture and Construction of Armenia",
                "description": ["Faculty of Municipal Services, Heat and Gas Supply: Master’s Degree  2015-2018",
                    "Faculty of Construction and Operation of Water Systems: Master’s Degree  2014-2016",
                    "Faculty of Construction and Operation of Water Systems: Master’s Degree  2014-2016"
                ]
            },
            {
                "title": "School",
                "subTitle": "Lyceum after Anania Shirakatsy, Yerevan, Armenia ",
            }
        ]
    }

    const infoContainerCareer = {
        "containerTitle": "Career Summary",
        "infoArr": [
            {
                "title": "Noorlogic LLC",
                "subTitle": "Drupal developer ",
                "description": [" Developing new user-facing features using Drupal "]
            },
            {
                "title": "MAMBLE LLC",
                "subTitle": "Front-end developer internship ",
                "description": [" Developing new user-facing features using React.js ",
                    " Building reusable components and front-end libraries for future use ",
                    " Optimizing components for maximum performance across a vast array of webcapable devices and browsers etc. "]
            },
            {
                "title": "Gazprom Armenia CJSC Engineering Center",
                "subTitle": "Design and estimate documentation engineer Nov. 2016 to  May. 2019 ",
                "description": [" gather data, visualize it, and analyze it in an effective manner, including putting the data analysis into presentations for stakeholders and upper management"]
            }
        ]
    }

    const infoContainerSkills = {
        "containerTitle": "Professional Skills",
        "infoArr": [
            {
                "title": "Coding skills:",
                "description": ["HTML/CSS, SCSS, JavaScript,  React.js",
                    "Node.js basic knowledge",
                    "Php basic knowledge",
                    "Drupal",
                    "SAS basic knowledge"
                ]
            },
            {
                "title": "Languages",
                "description": [
                    "Fluent: Armenian",
                    "Intermediate: Russian and English "
                ]
            }
        ]
    }


    return (

        <section className={className}>
            <section className="mainSection">
                <InfoSection info={infoContainerObjectiv} objectivClass="objectiv"/>
                <InfoSection info={infoContainerEducation}/>
            </section>

            <section className="mainSection">
                <InfoSection info={infoContainerCareer}/>
                <InfoSection info={infoContainerSkills}/>
            </section>


        </section>

    );
}