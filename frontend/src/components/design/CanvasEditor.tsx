import React, { createContext, useContext, useEffect, useReducer, useRef, useState } from "react";
import "tui-image-editor/dist/tui-image-editor.css";
// @ts-ignore
import ImageEditor from "@toast-ui/react-image-editor";
import { drawBackendApi } from "../../services/drawBackendApi";

const CanvasEditor = (props:any)=>{
    // @ts-ignore
    useEffect(()=>{
        //to remove tui-header-logo
        let imageEditorLogo = document.getElementsByClassName("tui-image-editor-header-logo");
        if(imageEditorLogo[0]){
            imageEditorLogo[0].remove();
        }
        console.log("props changed");
    },props.canvasImgSrc);

    const myTheme = {
        "menu.backgroundColor": "white",
        "common.backgroundColor": "white",
        "downloadButton.backgroundColor": "white",
        "downloadButton.borderColor": "white",
        "downloadButton.color": "black"
    };
    return (
        <div>
            <img src={props.canvasImgSrc}/>
            <ImageEditor
                includeUI={{
                    loadImage: {
                        path: props.canvasImgSrc,
                        name: "SampleImage",
                    },
                    theme: myTheme,
                    menu: ["crop", "flip", "rotate", "draw", "shape", "icon", "text", "mask", "filter"],
                    initMenu: "filter",
                    uiSize: {
                        width: "1200px",
                        height: "700px",
                    },
                    menuBarPosition: "bottom",
                }}
                cssMaxHeight={500}
                cssMaxWidth={700}
                selectionStyle={{
                    cornerSize: 20,
                    rotatingPointOffset: 70,
                }}
                usageStatistics={true}
            />
        </div>
    );
};
export default CanvasEditor;
