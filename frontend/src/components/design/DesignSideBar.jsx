import React from "react";
import  "../../assets/scss/components/design/designSideBar.scss";
import { Form, Input } from "semantic-ui-react";

const DesignSideBar = ()=>{
    const options = [
        { key: "m", text: "Male", value: "male" },
        { key: "f", text: "Female", value: "female" },
        { key: "o", text: "Other", value: "other" },
    ];

    return(
        <div className='sidebar-item-container'>
            <div className={"sidebar-item-header"}>
                <span>Length</span>
            </div>
            <div>
                <Input className={"sidebar-input"} label={"Width"} type={"text"}/>
                <Input className={"sidebar-input"} label={"Height"} type={"text"}/>
                <Form.Select className={"sidebar-input"} options={options} placeholder='Material' />
                <Input className={"sidebar-input"} label={"Quantity"} type={"number"}/>
                <Input className={"sidebar-input"} label={"Price"} type={"number"}/>
            </div>
            <div className={"sidebar-buttons"}>
                <div className={"sidebar-button"}>
                    <span>Draw</span>
                </div>
                <div className={"sidebar-button"}>
                    <span>3D View</span>
                </div>
            </div>
            <div className={"sidebar-border"}/>
            <div className={"sidebar-item-header"}>
                <span>Sheet Size</span>
            </div>
            <div>
                <Input className={"sidebar-input"} label={"Width"} type={"text"}/>
            </div>
            <div className={"sidebar-buttons"}>
                <div className={"sidebar-button"}>
                    <span>Layout</span>
                </div>
                <div className={"sidebar-button"}>
                    <span>View</span>
                </div>
            </div>
        </div>
    );
};
export default DesignSideBar;
