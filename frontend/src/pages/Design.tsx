import React from "react";
import DesignSideBar from "../components/design/DesignSideBar";
import Layout from "../components/base/Layout";
import "../assets/scss/pages/design.scss";
import { PreviewCanvas } from "../components/design/PreviewCanvas";
import CanvasEditor from "../components/design/CanvasEditor";

const Design = ()=>{

    return(
        <Layout>
            <div className={"design-main-container"}>
                <div className={"design-content-container"}>
                    <div className="design-sidebar-container">
                        <DesignSideBar/>
                    </div>
                    <div className={"design-content-primary"}>
                        <CanvasEditor/>
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
