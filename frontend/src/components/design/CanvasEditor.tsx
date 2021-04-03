import React, { useContext, useEffect, useState } from "react";
import "tui-image-editor/dist/tui-image-editor.css";
// @ts-ignore
import CanvasTest from "./CanvasTest";
import { LoadingScreen } from "../Loader";
import { LoaderContext } from "../../hooks/LoaderContext";

const CanvasEditor = (props:any)=>{
    const [showImageEditor, setShowImageEditor] = useState(true);
    // @ts-ignore
    const [loader] = useContext(LoaderContext);
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
            {showImageEditor && !loader ?
            <CanvasTest imageSrc={props.canvasImgSrc}/> : (<LoadingScreen/>) }
        </div>
    );
};
export default CanvasEditor;
