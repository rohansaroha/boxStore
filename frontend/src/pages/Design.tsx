import React from "react";
import DesignSideBar from "../components/design/DesignSideBar";
import Layout from "../components/base/Layout";
import "../assets/scss/pages/design.scss";
import img from "../assets/img/3DImage.png";
import imgPrivew from "../assets/img/3dImagePreview.png";

const Design = ()=>{
    return(
        <Layout>
            <div className={"design-main-container"}>
                <div className="design-sidebar-container">
                    <DesignSideBar/>
                </div>
                <div className={"design-content-container"}>
                    <div className={"design-content-primary"}>
                        <img src={img} alt="image" style={{ height: "80vh" , width: "70vw" }}/>
                        <div className={"design-content-buttons"}>
                            <div className={"design-content-button"}>
                                <span>3D View</span>
                            </div>
                            <div className={"design-content-button"}>
                                <span>Upload</span>
                            </div>
                            <div className={"design-content-button"}>
                                <span>Save</span>
                            </div>
                            <div className={"design-content-button"}>
                                <span>Download</span>
                            </div>
                        </div>
                    </div>
                    <div className="design-content-secondary">
                        <img src={imgPrivew} alt={"img-preivew"}/>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default Design;
