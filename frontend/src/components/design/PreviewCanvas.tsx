import React, { useRef, useEffect } from "react";
import { Icon } from "semantic-ui-react";

export const PreviewCanvas = (props:any) => {
    const zoomIn = ()=>{
        let GFG:any = document.getElementById("previewCanvas");
        let currHeight = GFG.clientHeight;
        GFG.style.height = (currHeight + 40) + "px";
    };
    const zoomOut = ()=>{
        let GFG:any = document.getElementById("previewCanvas");
        let currHeight = GFG.clientHeight;
        GFG.style.height = (currHeight - 40) + "px";
    };
    const previewCanvasRef = useRef(null);

    const draw = (ctx:any) => {
        ctx.fillStyle = "#00adb5";
        ctx.beginPath();
        ctx.arc(150, 100, 50, 0, 2 * Math.PI);
        ctx.fill();
    };

    useEffect(() => {

        const canvas:any = previewCanvasRef.current;
        const context = canvas.getContext("2d");

        //Our draw come here
        draw(context);
    }, [draw]);

    return (
        <div className={"previewCanvas-container"}>
            <div className={"previewCanvas-header-container"}>
                <div className={"previewCanvas-header"}><span>3D Visualization Window</span></div>
                <div className={"previewCanvas-buttons"}>
                    <div onClick={zoomIn} className={"previewCanvas-zoomIn"}>
                        <Icon name={"zoom-in"} color={"grey"} size={"large"}/>
                    </div>
                    <div onClick={zoomOut} className={"previewCanvas-zoomOut"}>
                        <Icon name={"zoom-out"} color={"grey"} size={"large"}/>
                    </div>
                </div>
            </div>
            <canvas id={"previewCanvas"} ref={previewCanvasRef} width={"500"} height={"200"} style={{ border: "1px solid #d8d8d8" }}{...props}/>
        </div>
        );
};

