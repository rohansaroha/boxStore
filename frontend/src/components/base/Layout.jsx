import React from "react";
import "../../assets/scss/components/layout.scss";
import TopBar from "../TopBar";

const Layout = (props)=>{
    return(
        <div className='layout-container'>
            <div className={"layout-topbar"}>
                <TopBar/>
            </div>
            <div className={"layout-content"}>
                {props.children}
            </div>
        </div>
    );
};
export default Layout;
