import React, { useContext } from "react";
import { Card, Image, Reveal } from "semantic-ui-react";
import "../../assets/scss/components/home/homeContent.scss";
import { NavLink } from "react-router-dom";
import { ImgContext } from "../../hooks/ImgContext";
import Img1 from ".././../assets/img/F0427(263).jpeg";
import Img2 from ".././../assets/img/F0447(244).jpeg";
import Img3 from ".././../assets/img/F0701(338).jpeg";
import Img4 from ".././../assets/img/F0713(330).jpeg";

const HomeContent = ()=>{
    // const imgData = useContext(ImgContext);
    const imgData = {
        imgSrc: Img1,
        imgSrc2: Img2,
        imgSrc3: Img3,
        imgSrc4: Img4
    };
    const renderBoxes = ()=>{
        const boxArr = [];
        for (let i = 0;i < 4;i++){
            const imgArr = [imgData.imgSrc,imgData.imgSrc2,imgData.imgSrc3,imgData.imgSrc4];
            const standardIds = ["0427", "0447", "0701", "0713"];
            boxArr.push(
                <Card className='seller-box' key={i}>
                    <div className="seller-box-img-container">
                        <Reveal animated='fade'>
                            <Reveal.Content visible>
                                <Image className="seller-box-img" src={imgArr[i]} size='small' />
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
                    {/*<NavLink to = "/design/0427" className="seller-box-button"><span>Design</span></NavLink>*/}
                    <NavLink to={`/design/${standardIds[i]}`} className="seller-box-button"><span>Design</span></NavLink>
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
