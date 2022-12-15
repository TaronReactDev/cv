import React, {useState} from "react";
import Icon1 from "./img/3stepIcones/Vector.svg";
import Icon2 from "./img/3stepIcones/Vector1.svg";
import Icon3 from "./img/3stepIcones/Vector2.svg";
import SliderImg1 from "./img/sliderImg/Rectangle23.jpg";
import SliderImg2 from "./img/sliderImg/Rectangle24.jpg";
import SliderImg3 from "./img/sliderImg/Rectangle25.jpg";
import TravelStoryImg1 from "./img/storyImg/Rectangle29.jpg";
import TravelStoryImg2 from "./img/storyImg/Rectangle30.jpg";
import TravelStoryImg3 from "./img/storyImg/Rectangle31.jpg";
import TravelStoryImg4 from "./img/storyImg/Rectangle32.jpg";
import FindSeeMore from "./img/findSeeMore.svg";
import FooterBG from "./img/footerBg.jpg"
import MobileSliderImg from "./img/mobilSlideBtn/Vector.svg"
import Footer from "./FooterTravel";


export default function MainTravel() {

    const stepState = [[Icon1, "Tell us what you want to do"], [Icon2, "Share us preferable dates "], [Icon3, "We will give you recommendations"]];
    const destinationState = [[SliderImg1, "SPAIN"], [SliderImg2, "JAPAN"], [SliderImg3, "USA"]];
    const [travelState, setTravelState] = useState([
        {
            img: TravelStoryImg1,
            title: "10 Photos of Attractive Thailand",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            btn: 0,
        },
        {
            img: TravelStoryImg2,
            title: "Canyonlands National Park, Utah",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            btn: 0,
        },
        {
            img: TravelStoryImg3,
            title: "I left my heart in the Mountains!",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            btn: 0,
        },
        {
            img: TravelStoryImg4,
            title: "The Longest journey in my life!",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            btn: 0,
        },

    ])

    const [index, setIndex] = useState(1);


    const handleSliderClick = (i) => () => {

        console.log(i)
        console.log(index)

        const slides = document.querySelectorAll(".sliderImg");

        slides.forEach((el, elIndex) => {

            return el.style.transform = `translateX( ${(index-i) * 100}%)`;
            // if (i < index) {
            //     console.log("11111")
            //
            // } else if (i > index) {
            //     console.log("2222")
            //
            //     return el.style.transform = `translateX(-100%)`;
            //
            // } else {
            //     console.log("eq")
            // }


        })

        setIndex(i)
    }
    const handleReadMore = (i) => () => {

        const travel = [...travelState];
        travel[i].btn = !travel[i].btn;

        setTravelState([...travel])

        document.getElementsByClassName("storyDescription")[i].classList.toggle("readMore")
    }

    const step = stepState.map((el) => {
        return (
            <div className="iconContainer">
                <div className="iconBackground" style={{backgroundImage: `url(${el[0]})`}}>
                </div>
                <span className="iconDescription">{el[1]}</span>
            </div>
        )
    });


    const destination = destinationState.map((el) => {
        return (
            <div className="slideShowContainer">
                <div className="sliderImg" style={{backgroundImage: `url(${el[0]})`}}>
                    <span>{el[1]}</span>
                </div>
            </div>
        )
    });


    const destinationSlideBtn = destinationState.map((el, i) => <div
        className={`destinationSlideBtn ${i === index ? "active" : ""}`}
        onClick={handleSliderClick(i)}></div>)

    const travel = travelState.map((el, i) => {
        return (
            <div className="travelStoryItemContainer">
                <img src={el.img}/>
                <div className="storyDescriptionContainer">
                    <h6>{el.title}</h6>
                    <p className="storyDescription">{el.description}</p>
                    <span onClick={handleReadMore(i)}>
                     {el.btn ? "Read Less" : "Read More"}
                    </span>
                </div>
            </div>
        )
    });

    return (<>
            <main className="mainContentContainer">
                <section className="steps">
                    <h4>3 STEPS TO THE PERFECT TRIP</h4>


                    <div className="stepIconsContainer">
                        {step}
                    </div>


                </section>
                <section className="destinations">
                    <h4>POPULAR DESTINATIONS</h4>
                    <div className="destinationsContainer">
                        {destination}
                        <span className="MobileSliderImg">
                            <div className="sliderRight" style={{backgroundImage: `url(${MobileSliderImg})`}}></div>
                            <div className="sliderLeft" style={{backgroundImage: `url(${MobileSliderImg})`}}></div>
                            {/*<img src={`${MobileSliderImg}`} className="sliderRight"/>
                                <img src={`${MobileSliderImg}`} className="sliderLeft"/>*/}
                        </span>
                        <span className="destinationSlideBtnContainer"> {destinationSlideBtn} </span>
                    </div>


                    <button className="buttonTravel findMoreBtn flexbtn">
                        <img src={FindSeeMore} alt="find more"/>
                        <span>Find More</span>
                    </button>
                </section>
            </main>


            <section className="stories">
                <h4>TRAVEL STORIES</h4>

                <div className="storiesContainer">

                    <div className="storiesBackground"></div>
                    <div className="travelStoryContainer">
                        {
                            travel
                        }
                    </div>
                    <button className="buttonTravel findMoreBtn flexbtn zIndex ">
                        <img src={FindSeeMore} alt="see more"/>
                        <span>See More</span>
                    </button>

                    <Footer/>

                </div>
            </section>


        </>
    )
}