import React, { useContext, useState } from "react";
import  "../../assets/scss/components/design/designSideBar.scss";
import { Form, Input } from "semantic-ui-react";
import { drawBackendApi } from "../../services/drawBackendApi";
import { toast } from "react-toastify";
import { CanvasContext } from "../../hooks/CanvasContext";
import { LoaderContext } from "../../hooks/LoaderContext";
import PropTypes from "prop-types";

const DesignSideBar = (props)=>{
    const [materialName,setMaterialName] = useState("");
    const [length,setLength] = useState(280);
    const [width,setWidth] = useState(150);
    const [depth,setDepth] = useState(120);
    const [layoutKey,setLayoutKey] = useState(null);
    const [,setCanvasImgSrc] = useContext(CanvasContext);
    const [LMSS,setLMSS] = useState("");
    const [LPatternS,setLPatternS] = useState("");
    const [LPaletteS,setLPaletteS] = useState("");
    const [sheetX,setSheetX] = useState("");
    const [sheetY,setSheetY] = useState("");
    const [,setLoader] = useContext(LoaderContext);
    //constants
    const materialOptions = [
        { key: "m", text: "350 GSM White board", value: "350GSM" },
        { key: "l", text: "Corrugated|B Flute", value: "Corrugated|B Flute" },
    ];
    const sheetSizeOptions = [
        { key: "m", text: "8X11 inches", value: "8X11" },
        { key: "l", text: "245mm * 350mm", value: "245X350" }
    ];
    const LayoutMachineSheetSettingName = [
        { key: "m", text: "Bobst COMMERCIAL 106", value: "8X11" },
        { key: "a", text: "Bobst COMMERCIAL 106 LE", value: "245mm" },
        { key: "b", text: "Bobst COMMERCIAL 106 LER", value: "45mm" },
        { key: "c", text: "Bobst COMMERCIAL 106 PE", value: "24mm" },
        { key: "d", text: "Bobst COMMERCIAL 106 PER", value: "2245mm" },
        { key: "e", text: "Bobst COMMERCIAL 145 PER", value: "22245mm" },
        { key: "f", text: "Bobst COMMERCIAL 76", value: "1245mm" },
        { key: "g", text: "Bobst COMMERCIAL 102", value: "24125mm" },
    ];
    const LayoutPatternSettingName = [
        { key: "a", text: "Interlock", value: "8X12" },
        { key: "b", text: "Automatic", value: "8X13" },
        { key: "c", text: "No Rotation", value: "8X21" },
        { key: "d", text: "End To End", value: "8X111" },
        { key: "e", text: "Shift", value: "8X1121" },
        { key: "f", text: "Skillet", value: "8X12311" },
        { key: "g", text: "Standard", value: "8X161" },
        { key: "h", text: "Tapered", value: "8X119" }
    ];

    const LayoutPaletteSettingName = [
        { key: "a", text: "Fitted Only", value: "8X118" },
        { key: "b", text: "Fitted and Stock", value: "8X171" },
        { key: "c", text: "Fitted with Print", value: "8X161" },
        { key: "d", text: "Stock Only", value: "8X151" },
        { key: "e", text: "None", value: "2445mm" }
    ];

    const drawApi = ()=>{
        let rawValues = { materialName,length,width,depth };
        setLoader(true);
        drawBackendApi.drawImage(props.standardId,"4","165",rawValues)
            .then((res)=>{
                drawBackendApi.updateCanvas(res.data.Layers[0].Preview)
                    .then((res)=>{
                        const bytes = new Uint8Array(res.data);
                        const blob = new Blob( [ bytes ], { type: "image/jpeg" } );
                        const urlCreator = window.URL || window.webkitURL;
                        const imageUrl = urlCreator.createObjectURL( blob );
                        setCanvasImgSrc(imageUrl);
                        setLoader(false);
                    });
            })
            .catch((err)=>{
                toast.error(err);
            })
        ;
    };
    const layoutClickHandler = async () => {
        const rawLayoutValues  = { LMSS,LPaletteS,LPatternS,sheetX,sheetY };
        setLoader(true);
        try {
            // eslint-disable-next-line no-unused-vars
            const layoutApi = await drawBackendApi.getLayout(rawLayoutValues)
                .then((res)=>{
                    drawBackendApi.previewLayout(res.data)
                        .then((res)=>{
                            const bytes = new Uint8Array(res.data);
                            const blob = new Blob( [ bytes ], { type: "image/jpeg" } );
                            const urlCreator = window.URL || window.webkitURL;
                            const imageUrl = urlCreator.createObjectURL( blob );
                            setCanvasImgSrc(imageUrl);
                            setLoader(false);
                        });
                });
        } catch (e) {
            console.log(e);
            console.log("Error in layout handler");
        }
    };
    return(
        <div className='sidebar-item-container'>
            <div>
                <Form.Select onChange={(e)=>setMaterialName(e.currentTarget.textContent)} className={"sidebar-input"} options={materialOptions} placeholder='Material' />
                <Input value={length} onChange={(e)=>setLength(e.target.value)} className={"sidebar-input"} label={"Length"} type={"number"}/>
                <Input value={width} onChange={(e)=>setWidth(e.target.value)} className={"sidebar-input"} label={"Width"} type={"number"}/>
                <Input value={depth} onChange={(e)=>setDepth(e.target.value)} className={"sidebar-input"} label={"Height"} type={"number"}/>
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
                <Form.Select onChange={(e,{ value })=> {
                    const data = value.split("X");
                    setSheetX(data[0]);
                    setSheetY(data[1]);
                }}
                             className={"sidebar-input"}
                              options={sheetSizeOptions}
                              placeholder='SheetSize' />

                {/*<Form.Select onChange={(e)=> setLMSS(e.currentTarget.textContent)}*/}
                {/*             className={"sidebar-input"}*/}
                {/*             options={LayoutMachineSheetSettingName}*/}
                {/*             placeholder='Layout Machine Sheet Setting' />*/}

                <Form.Select onChange={(e)=>setLPatternS(e.currentTarget.textContent)}
                             className={"sidebar-input"}
                             options={LayoutPatternSettingName}
                             placeholder='Layout Pattern Setting' />

                <Form.Select onChange={(e)=>setLPaletteS(e.currentTarget.textContent)}
                             className={"sidebar-input"}
                             options={LayoutPaletteSettingName}
                             placeholder='Layout Palette Setting' />
            </div>
            <div className={"sidebar-buttons"}>
                <div className={"sidebar-button"} onClick={layoutClickHandler}>
                    <span>Layout</span>
                </div>
                <div className={"sidebar-button"}>
                    <span>View</span>
                </div>
            </div>
        </div>
    );
};
DesignSideBar.propTypes = {
    standardId: PropTypes.string
};
export default DesignSideBar;
