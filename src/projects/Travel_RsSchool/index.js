import React, {useState} from "react";
import HeaderTravel from "./HeaderTravel";
import MainTravel from "./MainTravel";
import Login from "./LoginRegistration";
import "./travelStyles.scss"
import HeaderBG from "./img/background.jpg"

export default function Index() {

    const [login, setLogin] = useState(false)



    const handleClick = () => {

        login ?  document.body.classList.remove('onscroll') : document.body.classList.add('onscroll');


        setLogin((prev) => !prev)

    }

    return (
        <>
        <div className="containerBg" style={{backgroundImage:`url(${HeaderBG})`}}>
            <div className="navbarBackground"></div>

            <HeaderTravel handleClick={handleClick}/>
        </div>


            <MainTravel/>


        {
            login ? <Login handleClick={handleClick}/> : ""
        }

</>

)
}