import React from "react";
import "./projectsStyle.scss"
import ProjectElement from "./projectElem";
import backgroundImage1 from "../../../taron_sargsyan_cv/src/projects/Projectimages/githubsearch.jpg";
import backgroundImage2 from "../../../taron_sargsyan_cv/src/projects/Projectimages/tic-tac-toe.jpg";
import backgroundImage3 from "../../../taron_sargsyan_cv/src/projects/Projectimages/todo.jpg";
import backgroundImageClicker from "../../../taron_sargsyan_cv/src/projects/Projectimages/clicker.jpg";
import backgroundImage4 from "../../../taron_sargsyan_cv/src/projects/Projectimages/clicker.jpg";
import backgroundImageCodding from "../../../taron_sargsyan_cv/src/projects/Projectimages/codding.jpg";
import backgroundImageTravel from "../../../taron_sargsyan_cv/src/projects/Projectimages/codding.jpg";


export default function Projects() {
    const imagesForProjects = [
        [backgroundImageTravel, "Travel RsSchool", "travel" ],
        [backgroundImageCodding, "Codding Examples", "codding_examples"],
        [backgroundImage1, "Github profile searcher", "githubprofilesearcher"],
        [backgroundImage2, "Tic-tac-toe", "tictactoe"],
        [backgroundImage3, "My to do list", "mytodolist"],
        [backgroundImageClicker, "Clicker", "clicker" ],
        [backgroundImage4, "Gym", "gym"],
    ];
    const projects = imagesForProjects.map((elem) => {
        return <ProjectElement images={elem[0]} text={elem[1]} url={elem[2]}/>;
    });

    return (
        <main className="projectsContainer">
            <header>MY PROJECTS</header>
            <div className="projectElementDiv">
                {projects}
        </div>
        </main>
    );
}