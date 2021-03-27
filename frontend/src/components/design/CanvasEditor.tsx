import React, { useEffect, useState } from "react";
import "tui-image-editor/dist/tui-image-editor.css";
// @ts-ignore
import CanvasTest from "./CanvasTest";

const CanvasEditor = (props:any)=>{
    const [showImageEditor, setShowImageEditor] = useState(true);
    const renderImageEditor = () => {
        console.log("Setting iamge editor", props.canvasImgSrc);
        setShowImageEditor(true);
    };
    // @ts-ignore
    useEffect(()=>{
        //to remove tui-header-logo
        let imageEditorLogo = document.getElementsByClassName("tui-image-editor-header-logo");
        if(imageEditorLogo[0]){
            imageEditorLogo[0].remove();
        }
        setShowImageEditor(false);

        console.log("props changed");
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
