import React, { useContext, useState } from "react";
import  "../../assets/scss/components/design/designSideBar.scss";
import { Form, Input } from "semantic-ui-react";
import { drawBackendApi } from "../../services/drawBackendApi";
import { toast } from "react-toastify";
import { CanvasContext } from "../../hooks/CanvasContext";

const DesignSideBar = ()=>{
    const C_LAYOUT_MACHINE_SHEET_SETTING_NAME = "LayoutMachineSheetSettingName";
    const C_LAYOUT_PATTERN_SETTING_NAME = "LayoutMachineSheetSettingName";
    const C_LAYOUT_PALETTE_SETTING_NAME = "LayoutPaletteSettingName";

    const [materialName,setMaterialName] = useState("");
    const [length,setLength] = useState(10);
    const [width,setWidth] = useState(10);
    const [depth,setDepth] = useState(12);
    const [layoutKey,setLayoutKey] = useState(null);
    const [,setCanvasImgSrc] = useContext(CanvasContext);
    const materialOptions = [
        { key: "m", text: "350 GSM White board", value: "350GSM" },
        { key: "l", text: "Corrugated|B Flute", value: "Corrugated|B Flute" },
    ];
    const sheetSizeOptions = [
        { key: "m", name: "sheetsize", text: "8X11 inches", value: "8X11", "data-props": JSON.stringify({ sheetX: 8, sheetY: 12 }) },
        { key: "l", name: "sheetsize", text: "245mm * 350mm", value: "245mm", "data-props": JSON.stringify({ sheetX: 245, sheetY: 350 }) }
    ];
    const LayoutMachineSheetSettingName = [
        { key: "m", name: C_LAYOUT_MACHINE_SHEET_SETTING_NAME, text: "Bobst COMMERCIAL 106", value: "8X11", "data-props": JSON.stringify({ sheetX: 8, sheetY: 12 }) },
        { key: "a", name: "LayoutMachineSheetSettingName", text: "Bobst COMMERCIAL 106 LE", value: "245mm", "data-props": JSON.stringify({ sheetX: 8, sheetY: 12 }) },
        { key: "b", name: "LayoutMachineSheetSettingName", text: "Bobst COMMERCIAL 106 LER", value: "245mm", "data-props": JSON.stringify({ sheetX: 8, sheetY: 12 }) },
        { key: "c", name: "LayoutMachineSheetSettingName", text: "Bobst COMMERCIAL 106 PE", value: "245mm", "data-props": JSON.stringify({ sheetX: 8, sheetY: 12 }) },
        { key: "d", name: "LayoutMachineSheetSettingName", text: "Bobst COMMERCIAL 106 PER", value: "245mm", "data-props": JSON.stringify({ sheetX: 8, sheetY: 12 }) },
        { key: "e", name: "LayoutMachineSheetSettingName", text: "Bobst COMMERCIAL 145 PER", value: "245mm", "data-props": JSON.stringify({ sheetX: 8, sheetY: 12 }) },
        { key: "f", name: "LayoutMachineSheetSettingName", text: "Bobst COMMERCIAL 76", value: "245mm", "data-props": JSON.stringify({ sheetX: 8, sheetY: 12 }) },
        { key: "g", name: "LayoutMachineSheetSettingName", text: "Bobst COMMERCIAL 102", value: "245mm", "data-props": JSON.stringify({ sheetX: 8, sheetY: 12 }) },
    ];
    const LayoutPatternSettingName = [
        { key: "a", name: "LayoutPatternSettingName", text: "Interlock", value: "8X11", "data-props": JSON.stringify({ sheetX: 8, sheetY: 12 }) },
        { key: "b", name: "LayoutPatternSettingName", text: "Automatic", value: "8X11","data-props": JSON.stringify({ sheetX: 8, sheetY: 12 }) },
        { key: "c", name: "LayoutPatternSettingName", text: "No Rotation", value: "8X11","data-props": JSON.stringify({ sheetX: 8, sheetY: 12 }) },
        { key: "d", name: "LayoutPatternSettingName", text: "End To End", value: "8X11","data-props": JSON.stringify({ sheetX: 8, sheetY: 12 }) },
        { key: "e", name: "LayoutPatternSettingName", text: "Shift", value: "8X11","data-props": JSON.stringify({ sheetX: 8, sheetY: 12 }) },
        { key: "f", name: "LayoutPatternSettingName", text: "Skillet", value: "8X11", "data-props": JSON.stringify({ sheetX: 8, sheetY: 12 }) },
        { key: "g", name: "LayoutPatternSettingName", text: "Standard", value: "8X11","data-props": JSON.stringify({ sheetX: 8, sheetY: 12 }) },
        { key: "h", name: "LayoutPatternSettingName", text: "Tapered", value: "8X11","data-props": JSON.stringify({ sheetX: 8, sheetY: 12 }) }
    ];

    const LayoutPaletteSettingName = [
        { key: "a", name: "LayoutPaletteSettingName", text: "Fitted Only", value: "8X11", "data-props": JSON.stringify({ sheetX: 8, sheetY: 12 }) },
        { key: "b", name: "LayoutPaletteSettingName", text: "Fitted and Stock", value: "8X11", "data-props": JSON.stringify({ sheetX: 8, sheetY: 12 }) },
        { key: "c", name: "LayoutPaletteSettingName", text: "Fitted with Print", value: "8X11","data-props": JSON.stringify({ sheetX: 8, sheetY: 12 }) },
        { key: "d", name: "LayoutPaletteSettingName", text: "Stock Only", value: "8X11","data-props": JSON.stringify({ sheetX: 8, sheetY: 12 }) },
        { key: "e", name: "LayoutPaletteSettingName", text: "None", value: "245mm","data-props": JSON.stringify({ sheetX: 8, sheetY: 12 }) }
    ];

    const drawApi = ()=>{
        let rawValues = { materialName,length,width,depth };
        drawBackendApi.drawImage("267","4","165",rawValues)
            .then((res)=>{
                let canvasPath = res.data.Links.Preview;
                let standardId = canvasPath.split("/")[4];
                drawBackendApi.updateCanvas(standardId)
                    .then((res)=>{
                        const bytes = new Uint8Array(res.data);
                        const blob = new Blob( [ bytes ], { type: "image/jpeg" } );
                        const urlCreator = window.URL || window.webkitURL;
                        const imageUrl = urlCreator.createObjectURL( blob );
                        setCanvasImgSrc(imageUrl);
                    });
            })
            .catch((err)=>{
                toast.error(err);
            })
        ;
    };
    const layoutClickHandler = async () => {
        try {
            //Todo wire this up.
            const res = await drawBackendApi.getLayout();
            setLayoutKey(res.data);
            console.log(res);
            const res2 = await drawBackendApi.previewLayout(layoutKey);
            console.log("img is");
            console.log(res2);
            const bytes = new Uint8Array(res.data);
            const blob = new Blob( [ bytes ], { type: "image/jpeg" } );
            const urlCreator = window.URL || window.webkitURL;
            const imageUrl = urlCreator.createObjectURL( blob );
            setCanvasImgSrc(imageUrl);
        } catch (e) {
            console.log(e);
            console.log("Error in layout handler");
        }
    };
    const selectHandler = (e) => {
        console.log(JSON.parse(e.target.getAttribute("data-props")));
        console.log(e.target.getAttribute("name"));
        console.log(e.target.textContent);
        const name = e.target.getAttribute("name");
        if(e.target.textContent === C_LAYOUT_MACHINE_SHEET_SETTING_NAME) {

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
                <Form.Select className={"sidebar-input"} options={sheetSizeOptions} placeholder='SheetSize' onChange={e => selectHandler(e)}/>
                <Form.Select className={"sidebar-input"} options={LayoutMachineSheetSettingName} placeholder='Layout Machine Sheet Setting' />
                <Form.Select className={"sidebar-input"} options={LayoutPatternSettingName} placeholder='Layout Pattern Setting' />
                <Form.Select className={"sidebar-input"} options={LayoutPaletteSettingName} placeholder='Layout Palette Setting' />
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
export default DesignSideBar;
