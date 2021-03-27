import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/scss/components/topBar.scss";
import logo from "../assets/img/G&G_Logo.png";

const TopBar = ()=>{
    const [id,selectedId] = useState(0);
    const menuData = require("../components/temp-json/topbar.json").data;
    const rendermenu = ()=>{
        const menu: Array<any> = [];
        menuData.map((item: any, index: number)=>{
            let clsString = "topbar-menu-item";
            if(id === item.id){
                // eslint-disable-next-line no-console
                clsString = "topbar-menu-item-selected";
            }
            const idHandler = ()=>{
                selectedId(item.id);
            };
            menu.push(
                <NavLink to={item.link} onClick={idHandler} className={clsString} key={index}><span>{item.text}</span></NavLink>
            );
        });
        return menu;
    };
    return(
        <div className={"topbar-main-container"}>
            <NavLink to = '/' className={"topbar-logo-container"}>
                <img src={logo} alt='G&G Logo'/>
            </NavLink>
            <div className={"topbar-menu-container"}>
                {rendermenu()}
            </div>
        </div>
    );
};
export default TopBar;
