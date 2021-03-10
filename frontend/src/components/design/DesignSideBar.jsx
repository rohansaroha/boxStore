import React from "react";
import  "../../assets/scss/components/design/designSideBar.scss";
import { Form, Input } from "semantic-ui-react";
import { drawBackendApi } from "../../services/drawBackendApi";

const DesignSideBar = ()=>{
    const materialOptions = [
        { key: "m", text: "350 GSM White board", value: "350GSM" }
    ];
    const sheetSizeOptions = [
        { key: "m", text: "8X11 inches", value: "8X11" }
    ];

    const drawApi = ()=>{
        drawBackendApi.drawCanvas("0427","9999","My jobs")
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            })
        ;
    };
    return(
        <div className='sidebar-item-container'>
            <div>
                <Form.Select className={"sidebar-input"} options={materialOptions} placeholder='Material' />
                <Form.Select className={"sidebar-input"} options={sheetSizeOptions} placeholder='SheetSize' />
                <Input className={"sidebar-input"} label={"Length"} type={"text"}/>
                <Input className={"sidebar-input"} label={"Width"} type={"text"}/>
                <Input className={"sidebar-input"} label={"Height"} type={"text"}/>
                <Input className={"sidebar-input"} label={"Quantity"} type={"number"}/>
                <Input className={"sidebar-input"} label={"Price"} type={"number"}/>
            </div>
            <div className={"sidebar-buttons"}>
                <div onClick={drawApi} className={"sidebar-button"}>
                    <span>Draw</span>
                </div>
                <div className={"sidebar-button"}>
                    <span>3D View</span>
                </div>
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
