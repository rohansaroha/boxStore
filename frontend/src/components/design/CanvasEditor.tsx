import React, { createContext, useContext } from "react";
import "tui-image-editor/dist/tui-image-editor.css";
// @ts-ignore
import ImageEditor from "@toast-ui/react-image-editor";
import { ImgContext } from "../../context/ImgContext";

const CanvasEditor = ()=>{
    const imgData = useContext(ImgContext);
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
                        path: imgData.imgSrc,
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
