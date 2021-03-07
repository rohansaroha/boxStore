import React, { useRef, useEffect } from "react";

export const Canvas = (props:any)=>{

    const canvasRef = useRef(null);
    const draw = (ctx:any,frameCount:number) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "#00adb5";
        ctx.beginPath();
        ctx.arc(500, 200, 100 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
        ctx.fill();
    };
    useEffect(() => {

        const canvas:any = canvasRef.current;
        const context = canvas.getContext("2d");
        let frameCount = 0;
        let animationFrameId:any;

        //Our draw came here
        const render = () => {
            frameCount++;
            draw(context, frameCount);
            animationFrameId = window.requestAnimationFrame(render);
        };
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [draw]);
    return <canvas ref={canvasRef} width={"1000"} height={"510"} style={{ border: "1px solid #d8d8d8" }} {...props}/>;
};
