import React, {useState} from "react";
import Logo from "./img/Vectorlogo.svg"
import BurgerMenu from "./img/burgermenu.svg"
import CloseBurgerMenu from "./img/close-line.svg"

export default function HeaderTravel({handleClick}) {

    const menuItem = ["How It Works", "Plan Your Trip", "Destinations", "Travel Stories"];


    const menuNavBar = menuItem.map((el) => {
        return (<li className="headerTravel__nav_ul_li">{el}</li>)
    })





    return (
        <div className="container"> <header className="headerTravel">

            <nav className="headerTravel__nav">




                <div className="headerTravel__nav-container">
                <span className="headerTravel__nav-span-logo">
                    <img src={`${Logo}`} alt="logo"/>
                    <span>Travel Portal</span>
                </span>

                    <ul className="headerTravel__nav-ul">
                        {menuNavBar}
                    </ul>



                    <span  className="burgerBtn"  id="burgerBtn" onClick={()=>{
                        document.getElementById("burger").classList.add("activMenu");
                    }} >


                        <img src={`${BurgerMenu}`} alt="burger"/>
                    </span>

                    <div className="burgerMenuContainer" id="burger" >

                        <div className="closeBurgerMenu" onClick={()=>{
                            document.getElementById("burger").classList.remove("activMenu")}}>

                            <img src={`${CloseBurgerMenu}`} alt="burger"/>
                        </div>


                    <ul className="burgerMenu">
                        {menuNavBar}
                        <li onClick={handleClick} className= "headerTravel__nav_ul_li"> Account</li>
                        <li className= "headerTravel__nav_ul_li"> Social Media</li>
                    </ul>
                    </div>
                    <button className="buttonTravel loginBtn"  onClick={handleClick}>Login</button>
                </div>

            </nav>


            <section className="preview">
                <h2>Explore the beauty of the World</h2>
                <h6>Receive personalized recommendations for countries, hotels, activities and more</h6>

                <label className="inputLabel">
                    <input type="text" placeholder="What would you like to do?"/>
                    <button className="buttonTravel startPlanningBtn">Start Planning</button>
                </label>
            </section>
        </header> </div>
    )
}