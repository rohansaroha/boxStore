import React from "react";
import "../../assets/scss/components/layout.scss";

const Layout = (props)=>{
    return(
        <div className='layout-container'>
            {props.children}
        </div>
    );
};
export default Layout;
