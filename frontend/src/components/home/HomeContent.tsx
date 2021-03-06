import React from "react";
import { Card, Image, Reveal } from "semantic-ui-react";
import "../../assets/scss/components/home/homeContent.scss";
import cardImg from "../../assets/img/footerBackroungImg2.jpg";
import { NavLink } from "react-router-dom";

const HomeContent = ()=>{
    const renderBoxes = ()=>{
        const boxArr = [];
        for (let i = 0;i < 8;i++){
            boxArr.push(
                <Card className='seller-box' key={i}>
                    <div className="seller-box-img-container">
                        <Reveal animated='fade'>
                            <Reveal.Content visible>
                                <Image className="seller-box-img" src={cardImg} size='small' />
                            </Reveal.Content>
                            <Reveal.Content hidden>
                                <div className={"seller-box-img-hidden"}><span>View Details</span></div>
                            </Reveal.Content>
                        </Reveal>
                    </div>
                    <div className="seller-box-content-container">
                        <div className="seller-box-content-header"><span>DISPLAY MAILER 6 X 4 X 3 - READY TO DESIGN</span></div>
                        <div className="seller-box-content-border"/>
                        <div className="seller-box-price-container">
                            <div className="seller-box-price-text"><span>Qty</span></div>
                            <div className="seller-box-price"><span>252</span></div>
                        </div>
                        <div className="seller-box-price-container">
                            <div className="seller-box-price-text"><span>Total Price</span></div>
                            <div className="seller-box-price"><span>25200</span></div>
                        </div>
                        <div className="seller-box-price-container">
                            <div className="seller-box-price-bold"><span>Unity Price</span></div>
                            <div className="seller-box-price-bold"><span>2520000</span></div>
                        </div>
                    </div>
                    <NavLink to = "/design" className="seller-box-button"><span>Design</span></NavLink>
                </Card>
            );
        }
        return boxArr;
    };
    return (
        <div className={"seller-main-container"}>
            <div className={"seller-header"}><span>Shop All Boxes</span></div>
            <div className={"seller-box-container"}>{renderBoxes()}</div>
        </div>
    );
};
export default HomeContent;
