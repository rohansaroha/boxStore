import React from "react";
import "../../assets/scss/base/detailsCard.scss";

interface IDetailsCard  {
    header:string,
    description:string
}

const DetailsCard = (props:IDetailsCard)=>{
    return (
        <div className='detailsCard-container'>
            <div>
                <div className='detailsCard-header'>
                    <span>{props.header}</span>
                </div>
                <div className="detailsCard-description">
                    <span>{props.description}</span>
                </div>
            </div>
        </div>
    );
};
export default DetailsCard;
