import React from "react";
import DesignSideBar from "../components/design/DesignSideBar";
import Layout from "../components/base/Layout";
import "../assets/scss/pages/design.scss";
import { PreviewCanvas } from "../components/design/PreviewCanvas";
import { Icon } from "semantic-ui-react";
import { Canvas } from "../components/design/Canvas";

const Design = ()=>{

    return(
        <Layout>
            <div className={"design-main-container"}>
                <div className="design-sidebar-container">
                    <DesignSideBar/>
                </div>
                <div className={"design-content-container"}>
                    <div className={"design-content-primary"}>
                        <Canvas/>
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
                        <PreviewCanvas/>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default Design;
