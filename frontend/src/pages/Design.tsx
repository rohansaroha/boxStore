import React, { useContext, useEffect, useState } from "react";
import DesignSideBar from "../components/design/DesignSideBar";
import Layout from "../components/base/Layout";
import "../assets/scss/pages/design.scss";
import { PreviewCanvas } from "../components/design/PreviewCanvas";
import CanvasEditor from "../components/design/CanvasEditor";
import { CanvasContext } from "../hooks/CanvasContext";
import { drawBackendApi } from "../services/drawBackendApi";
import { LoadingScreen } from "../components/Loader";

const Design = ()=>{
    // @ts-ignore
    const [canvasImgSrc,setCanvasImgSrc] = useContext(CanvasContext);
    const [loader,setLoader] = useState<boolean>(true);
    const [standardId,setStandardId] = useState<string>("");

    useEffect(()=>{

        drawBackendApi.Canvas_3D()
            .then((res)=>{
                console.log("response for 3d preview api : ",res.data);
            });
            //standard id
            const dstandardId = window.location.href.split("/")[4];
            setStandardId(dstandardId);
            console.log("this is the standard id : ",dstandardId);

            drawBackendApi.drawImage(dstandardId,"4","165",{ length: 18,width: 15,depth: 20,materialName: "Corrugated|B Flute" })
                .then((res)=>{
                    drawBackendApi.updateCanvas(res.data.Layers[0].Preview)
                        .then((res)=>{
                            const bytes = new Uint8Array(res.data);
                            const blob = new Blob( [ bytes ], { type: "image/jpeg" } );
                            const urlCreator = window.URL || window.webkitURL;
                            const imageUrl = urlCreator.createObjectURL( blob );
                            setCanvasImgSrc(imageUrl);
                            setLoader(false);
                        })
                        .catch((err)=>{
                            console.log(err);
                        });
                });
    },[]);

    return(
        <Layout>
            <div className={"design-main-container"}>
                <div className={"design-content-container"}>
                    <div className="design-sidebar-container">
                        <DesignSideBar standardId={standardId}/>
                    </div>
                    <div className={"design-content-primary"}>
                        {loader
                            ? (<LoadingScreen/>)
                            : (<CanvasEditor canvasImgSrc={canvasImgSrc}/>)
                        }
                    </div>
                </div>
                <div className="design-content-preview">
                    <div className={"design-content-buttons"}>
                        <div className={"design-content-button"}>
                            <span>Text</span>
                        </div>
                        <div className={"design-content-button"}>
                            <span>Image</span>
                        </div>
                        <div className={"design-content-button"}>
                            <span>Shapes</span>
                        </div>
                        <div className={"design-content-button"}>
                            <span>Background</span>
                        </div>
                    </div>
                    <PreviewCanvas/>
                </div>
            </div>
        </Layout>
    );
};
export default Design;
