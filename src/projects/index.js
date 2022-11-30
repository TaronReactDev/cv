import React from "react";
import "./projectsStyle.scss"
import ProjectElement from "./projectElem";
import backgroundImage1 from "./Projectimages/githubsearch.jpg";
import backgroundImage2 from "./Projectimages/tic-tac-toe.jpg";
import backgroundImage3 from "./Projectimages/todo.jpg";
import backgroundImage4 from "./Projectimages/githubsearch.jpg";

export default function Projects() {
    const imagesForProjects = [
        [backgroundImage1, "Github profile searcher", "githubprofilesearcher", "fade-right"],
        [backgroundImage2, "Tic-tac-toe", "tictactoe", "fade-left"],
        [backgroundImage3, "My to do list", "mytodolist", "fade-right"],
        [backgroundImage4, "Clicker", "clicker", "fade-right", "fade-left"],
        [backgroundImage4, "Gym", "gym", "fade-right", "fade-left"],
    ];
    const projectes = imagesForProjects.map((elem) => {
        return <ProjectElement images={elem[0]} text={elem[1]} url={elem[2]}/>;
    });

    return (
        <main className="projectsContainer">
            <header>MY PROJECTS</header>
            <div className="projectElementDiv">
                {projectes}
        </div>
        </main>
    );
}