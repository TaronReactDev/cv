import React from "react";
import "./gymStyle.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import trainer1 from "./img/trainer1.jpg";
import trainer2 from "./img/trainer2.jpg";
import trainer3 from "./img/trainer3.jpg";

export default function Trainers() {
  return (
    <div className="trainers" >
      <div className="trainersSection1" >
        {" "}
        <h2> MEET OUR TRAINERS</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, tempora?</p>
      </div>

      <div className="trainersSection2" >
        <div className="trainerinfo"  >
          <img src={trainer1} alt="asd" />
          <p>Asjnsad ksajdn</p>
          <p>Bodybilding</p>
          <FacebookIcon />
          <LinkedInIcon />
        </div>

        <div className="trainerinfo"  >
          <img src={trainer2} alt="ASAs" />
          <p>samdlkm laskdmm</p>
          <p>Box</p>
          <FacebookIcon />
          <LinkedInIcon  />
        </div>

        <div className="trainerinfo" >
          <img src={trainer3} alt="as" />
          <p>asdaslakm asdn</p>
          <p>Karate</p>
          <FacebookIcon />
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
}
