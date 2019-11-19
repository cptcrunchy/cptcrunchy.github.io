import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

export default function Greeting() {
  return (
    <div className="gretting-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">Hi all 👋 I'm Jason</h1>
            <p className="greeting-text-p subTitle">
              A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / C# / Nodejs and some
              other cool libraries and frameworks .
            </p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href="https://drive.google.com/file/d/1BS5iIlqSo8jhGn38bvVI0WmdOg54eZYV/view?usp=sharing" />
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <img alt="saad sitting on table" src={require("../../assests/images/manOnTable.svg")}></img>
        </div>
      </div>
    </div>
  );
}
