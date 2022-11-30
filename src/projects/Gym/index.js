import React from "react";
import "./gymStyle.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import DraftsIcon from "@mui/icons-material/Drafts";
import Trainers from "./Trainers"
import ContactUs from "./ContactSection"
// import "aos/dist/aos.css";

// import AOS from "aos";

// AOS.init({ delay: 500, duration: 2000 })

export default function index() {
  return (
    <>
      <div className="gymimg">
        <div>
          <h2>Sargsyans gym</h2>
          <div className="iconDiv">
            <FacebookIcon className="icons" />
            <LinkedInIcon className="icons" />
            <PhoneForwardedIcon className="icons" />
            <DraftsIcon className="icons" />
          </div>{" "}
        </div>

        <div className="spanDownloadBooklet"  >
          {" "}<h2>FEEL THE POWER</h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
          doloremque, nam consequuntur non quos praesentium, quidem quod vitae
          quasi, perferendis ratione sapiente atque quas deleniti?
        </div>
      </div>

      <Trainers/>
      <ContactUs/>
    </>
  );
}
