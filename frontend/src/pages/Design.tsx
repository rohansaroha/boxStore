import React, { useContext, useEffect, useState } from "react";
import DesignSideBar from "../components/design/DesignSideBar";
import Layout from "../components/base/Layout";
import "../assets/scss/pages/design.scss";
import { PreviewCanvas } from "../components/design/PreviewCanvas";
import CanvasEditor from "../components/design/CanvasEditor";
import { CanvasContext } from "../hooks/CanvasContext";
import { drawBackendApi } from "../services/drawBackendApi";

const Design = ()=>{
    // @ts-ignore
    const [canvasImgSrc,setCanvasImgSrc] = useContext(CanvasContext);
    const [loader,setLoader] = useState<boolean>(true);
    useEffect(()=>{
        //to remove tui-header-logo

        drawBackendApi.Canvas_3D()
            .then((res)=>{
                console.log("response for 3d preview api");
                console.log(res);
            });

        if(!canvasImgSrc){
            drawBackendApi.drawCanvas("964","3849")
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
        }
        else{
            setLoader(false);
        }
    },[]);

    return(
        <Layout>
            <div className={"design-main-container"}>
                <div className={"design-content-container"}>
                    <div className="design-sidebar-container">
                        <DesignSideBar/>
                    </div>
                    <div className={"design-content-primary"}>
                        {loader
                            ? (<div>loading</div>)
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
