import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/Arrow-Left2.svg";
import Sademoji from "../assets/sad.png";

function NotFound() {
  return (
    <div className="error-container error-design-wrap">
      <div className="error-design-wrapper">
        <h1>404</h1>
        <div className="strike"></div>
      </div>
      <div>
        <h2>
          <img src={Sademoji} alt="Sad emoji" />
          Ohh, Shit
        </h2>
        <p>Page doesn't exist</p>
        <div className="top-navigation">
          <button className="back">
            <ArrowLeft />
            <Link to="/">Back to Homepage</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
