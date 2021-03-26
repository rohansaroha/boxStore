import React, { useContext, useState } from "react";
import  "../../assets/scss/components/design/designSideBar.scss";
import { Form, Input } from "semantic-ui-react";
import { drawBackendApi } from "../../services/drawBackendApi";
import { toast } from "react-toastify";
import { CanvasContext } from "../../hooks/CanvasContext";

const DesignSideBar = ()=>{
    const [materialName,setMaterialName] = useState("");
    const [length,setLength] = useState(null);
    const [width,setWidth] = useState(null);
    const [depth,setDepth] = useState(null);
    const [canvasImgSrc,setCanvasImgSrc] = useContext(CanvasContext);
    const materialOptions = [
        { key: "m", text: "350 GSM White board", value: "350GSM" },
        { key: "l", text: "Corrugated|B Flute", value: "Corrugated|B Flute" },
    ];
    const sheetSizeOptions = [
        { key: "m", text: "8X11 inches", value: "8X11" },
        { key: "l", text: "245mm * 350mm", value: "245mm" }
    ];

    const drawApi = ()=>{
        let rawValues = { materialName,length,width,depth };
        drawBackendApi.drawImage("267","4","165",rawValues)
            .then((res)=>{
                let canvasPath = res.data.Links.Preview;
                let standardId = canvasPath.split("/")[4];
                console.log(standardId);
                drawBackendApi.updateCanvas(standardId)
                    .then((res)=>{
                        const bytes = new Uint8Array(res.data);
                        const blob = new Blob( [ bytes ], { type: "image/jpeg" } );
                        const urlCreator = window.URL || window.webkitURL;
                        const imageUrl = urlCreator.createObjectURL( blob );
                        setCanvasImgSrc(imageUrl);
                        console.log(canvasImgSrc);
                    });
            })
            .catch((err)=>{
                toast.error(err);
            })
        ;
    };
    return(
        <div className='sidebar-item-container'>
            <div>
                <Form.Select onChange={(e)=>setMaterialName(e.currentTarget.textContent)} className={"sidebar-input"} options={materialOptions} placeholder='Material' />
                <Input onChange={(e)=>setLength(e.target.value)} className={"sidebar-input"} label={"Length"} type={"number"}/>
                <Input onChange={(e)=>setWidth(e.target.value)} className={"sidebar-input"} label={"Width"} type={"number"}/>
                <Input onChange={(e)=>setDepth(e.target.value)} className={"sidebar-input"} label={"Height"} type={"number"}/>
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
            <div>
                <Form.Select className={"sidebar-input"} options={sheetSizeOptions} placeholder='SheetSize' />
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
