import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Projects from "./projects/index";
import XikOik from "./projects/X_O/Xikoik"
import Github from "./projects/Github/GitHubProfileSearcher"
import Clicker from "./projects/Clicker/index"
import Gym from "./projects/Gym/index"
import Todo from "./projects/Todos/index"
import CoddingExamples from "./projects/Codding_examples"
import Travel from "./projects/Travel_RsSchool/index"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/projects travel" element={<Travel/>}/>
                <Route path="/projects mytodolist" element={<Todo/>}/>
                <Route path="/projects tictactoe" element={<XikOik/>}/>
                <Route path="/projects githubprofilesearcher" element={<Github/>}/>
                <Route path="/projects clicker" element={<Clicker/>}/>
                <Route path="/projects gym" element={<Gym/>}/>
                <Route path="/projects codding_examples" element={<CoddingExamples/>}/>
            </Routes>

        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
