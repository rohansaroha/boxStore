import React, { useEffect, useState } from "react";
import { Card, Image, Reveal } from "semantic-ui-react";
import "../../assets/scss/components/home/homeContent.scss";
import { NavLink } from "react-router-dom";
import { imgRenderBackendApi } from "../../services/imgRenderBackendApi";

const HomeContent = ()=>{
    const [imgSrc,SetImgSrc] = useState<string|null>(null);
    const [loader,SetLoader] = useState(true);

    useEffect( ()=>{
        imgRenderBackendApi.imgRender("0423")
            .then((res)=>{
                let b64Response:string = "data:image/png;base64," + btoa(unescape(encodeURIComponent(res.data)));
                SetImgSrc(b64Response);
                SetLoader(false);
                console.log(imgSrc);
                // console.log(base64.encode(res.data));
            })
        .catch((err)=>{
            console.log(err);
        });
    },[]);

    const renderBoxes = ()=>{
        const boxArr = [];
        for (let i = 0;i < 4;i++){
            boxArr.push(
                <Card className='seller-box' key={i}>
                    <div className="seller-box-img-container">
                        <Reveal animated='fade'>
                            <Reveal.Content visible>
                                <Image className="seller-box-img" src={imgSrc} size='small' />
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
        console.log(imgSrc);
        return boxArr;
    };
    return (
        loader
            ? (<span>loading</span>)
            : (
                <div className={"seller-main-container"}>
                    <div className={"seller-header"}><span>Shop All Boxes</span></div>
                    <div className={"seller-box-container"}>{renderBoxes()}</div>
                </div>
            )
    );
};
export default HomeContent;
