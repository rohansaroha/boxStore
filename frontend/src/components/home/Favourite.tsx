import React from "react";
import Slider from "react-slick";
import "../../assets/scss/components/home/favourite.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../assets/img/footerBackroungImg2.jpg";

const Favourite = ()=>{
    let settings = {
        dots: true,
        arrows: true,
        accessibility: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    const renderFavImg = ()=>{
        const favImgs = [];
        for (let i = 0;i < 6;i++){
            favImgs.push(
                <img key={i} className={"favourite-img"} src={img} alt='favourites-img'/>
            );
        }
        return favImgs;
    };
    return(
        <div className='favourite-container'>
            <div className="favourite-header"><span>Customer Favourites</span></div>
            <Slider {...settings}>{renderFavImg()}</Slider>
        </div>
    );
};
export default Favourite;
