import React, { useRef, useEffect, useState } from "react";
import { Icon } from "semantic-ui-react";
import "../../assets/scss/components/design/previewCanvas.scss";

export const PreviewCanvas = (props:any) => {
    const [radius,setRadius] = useState(60);
    const previewCanvasRef = useRef(null);

    const zoomIn = ()=>{
        setRadius(radius + 10);
    };
    const zoomOut = ()=>{
        if(radius > 0){
            setRadius(radius - 10);
        }
    };

    const draw = (ctx:any) => {
        ctx.fillStyle = "#00adb5";
        ctx.beginPath();
        ctx.arc(250, 100, radius, 0, 2 * Math.PI);
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
            <canvas id={"previewCanvas"} ref={previewCanvasRef} width={"500"} height={"200"}{...props}/>
        </div>
        );
};

