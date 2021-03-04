import React, { useState } from "react";
import "../assets/scss/components/topBar.scss";

const TopBar = ()=>{
    const [id,selectedId] = useState(0);
    const menuData = require("../components/temp-json/topbar.json").data;
    const rendermenu = ()=>{
        const menu = [];
        menuData.map((item)=>{
            let clsString = "topbar-menu-item";
            if(id === item.id){
                // eslint-disable-next-line no-console
                console.log(item);
                clsString = "topbar-menu-item-selected";
            }
            const idHandler = ()=>{
                selectedId(item.id);
            };
            menu.push(
                <div onClick={idHandler} className={clsString}><span>{item.text}</span></div>
            );
        });
        return menu;
    };
    return(
        <div className={"topbar-main-container"}>
            <div className={"topbar-logo-container"}>
                <span>BoxStore</span>
            </div>
            <div className={"topbar-menu-container"}>
                {rendermenu()}
            </div>
        </div>
    );
};
export default TopBar;
