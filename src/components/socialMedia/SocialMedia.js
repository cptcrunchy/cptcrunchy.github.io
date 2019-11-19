import React from "react";
import "./SocialMedia.css";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a href="https://github.com/cptcrunchy" className="icon-button github" target="_blank">
        <i className="fab fa-github"></i>
        <span></span>
      </a>
      <a href="https://www.linkedin.com/in/jgutierrez84/" className="icon-button linkedin" target="_blank">
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      <a href="mailto:jasong84@gmail.com" className="icon-button google" target="_blank">
        <i className="fab fa-google"></i>
        <span></span>
      </a>
      <a href="https://twitter.com/cptCrunch_" className="icon-button twitter" target="_blank">
        <i className="fab fa-twitter"></i>
        <span></span>
      </a>
      <a href="https://medium.com/@jasong84" className="icon-button facebook" target="_blank">
        <i className="fab fa-medium-m"></i>
        <span></span>
      </a>
    </div>
  );
}
