import React, { createContext, useContext, useEffect, useState } from "react";
import "tui-image-editor/dist/tui-image-editor.css";
// @ts-ignore
import ImageEditor from "@toast-ui/react-image-editor";
import { CanvasContext } from "../../hooks/CanvasContext";
import { drawBackendApi } from "../../services/drawBackendApi";

const CanvasEditor = ()=>{
    // @ts-ignore
    const [canvasImgSrc,setCanvasImgSrc] = useContext(CanvasContext);

    useEffect(()=>{
        //to remove tui-header-logo
        let imageEditorLogo = document.getElementsByClassName("tui-image-editor-header-logo");
        imageEditorLogo[0].remove();
        console.log(canvasImgSrc);
        drawBackendApi.drawCanvas("964","3849")
            .then((res)=>{
                const bytes = new Uint8Array(res.data);
                const blob = new Blob( [ bytes ], { type: "image/jpeg" } );
                const urlCreator = window.URL || window.webkitURL;
                const imageUrl = urlCreator.createObjectURL( blob );
                setCanvasImgSrc(imageUrl);
            })
            .catch((err)=>{
                console.log(err);
            });
    },[]);

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
                        path: canvasImgSrc,
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
