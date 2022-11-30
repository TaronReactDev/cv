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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path ="/" element={<App/>}/>
              <Route path ="/projects" element={<Projects/>}/>
              <Route   path= "/projectes mytodolist"  element={<Todo/>} />
              <Route   path= "/projectes tictactoe"  element={<XikOik/>} />
              <Route   path= "/projectes githubprofilesearcher"  element={<Github/>} />
              <Route   path= "/projectes clicker"  element={<Clicker/>} />
              <Route   path= "/projectes gym"  element={<Gym/>} />
          </Routes>

      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
