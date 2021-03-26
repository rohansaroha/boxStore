import React from "react";
import "../../assets/scss/components/home/heroComponent.scss";
import { Icon } from "semantic-ui-react";

const HeroComponent = () => {
  return (
    <div className="hero-container">
        <div className={"text-container"}>
          <h1>
            <span className={"alpha resize"}>B</span>ox   <span className={"alpha"}>S</span>tore
          </h1>
          <h2>BoxUp offers high- quality, custom-printed boxes at Online.
          </h2>
          <div className='hero-button-container'>
            <div className='hero-button'>
              <span>Start Creating</span>
            </div>
          </div>
        </div>
        <div className='hero-footer-container'>
          <div className='hero-footer-content'>
            <span>Make an instant impact with custom printed boxes that tell your brand story.</span>
          </div>
          <Icon name='angle down' size='huge' color='grey'/>
        </div>
    </div>
  );
};

export default HeroComponent;
