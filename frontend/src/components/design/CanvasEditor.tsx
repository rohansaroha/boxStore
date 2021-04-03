import React, { useEffect, useState } from "react";
import "tui-image-editor/dist/tui-image-editor.css";
// @ts-ignore
import CanvasTest from "./CanvasTest";

const CanvasEditor = (props:any)=>{
    const [showImageEditor, setShowImageEditor] = useState(true);
    const renderImageEditor = () => {
        setShowImageEditor(true);
    };
    // @ts-ignore
    useEffect(()=>{
        //to remove tui-header-logo
        setShowImageEditor(false);
        setTimeout(() => {
            renderImageEditor();
        }, 100);
    },[props.canvasImgSrc]);

    return (
        <div>
            {showImageEditor ?
            <CanvasTest imageSrc={props.canvasImgSrc}/> : "Loading" }
        </div>
    );
};
export default CanvasEditor;
