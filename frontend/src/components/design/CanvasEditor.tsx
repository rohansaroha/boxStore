import React from "react";
import "tui-image-editor/dist/tui-image-editor.css";
// @ts-ignore
import ImageEditor from "@toast-ui/react-image-editor";

const CanvasEditor = ()=>{
    const myTheme = {
        "menu.backgroundColor": "white",
        "common.backgroundColor": "#151515",
        "downloadButton.backgroundColor": "white",
        "downloadButton.borderColor": "white",
        "downloadButton.color": "black"
    };
    return (
        <div>
            <ImageEditor
                includeUI={{
                    loadImage: {
                        path: "img/sampleImage.jpg",
                        name: "SampleImage",
                    },
                    theme: myTheme,
                    menu: ["shape", "filter","text"],
                    initMenu: "filter",
                    uiSize: {
                        width: "1000px",
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
                usageStatistics={false}
            />
        </div>
    );
};
export default CanvasEditor;
