import React, { createContext, useContext, useEffect, useState } from "react";
import "tui-image-editor/dist/tui-image-editor.css";
// @ts-ignore
import ImageEditor from "@toast-ui/react-image-editor";
import { ImgContext } from "../../hooks/ImgContext";

const CanvasEditor = ()=>{
    const canvasImgSrc = useContext(ImgContext);
    console.log(canvasImgSrc.canvasImgSrc);

    const myTheme = {
        "menu.backgroundColor": "white",
        "common.backgroundColor": "white",
        "downloadButton.backgroundColor": "white",
        "downloadButton.borderColor": "white",
        "downloadButton.color": "black"
    };
    return (
        <div>
            <ImageEditor
                includeUI={{
                    loadImage: {
                        path: canvasImgSrc.canvasImgSrc,
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
