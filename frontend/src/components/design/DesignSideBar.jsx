import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import  "../../assets/scss/components/design/designSideBar.scss";

const DesignSideBar = ()=>{
    const sideBarData = require("../temp-json/sidebar.json").data;
    const [menu,showMenu] = useState(false);
    const [id,selectedId] = useState(1);
    const renderSidebar = ()=>{
        const sideBarItems = [];
        sideBarData.map((sideBarItem)=>{
            let sideBarItemClsString = "sidebar-item";
            let sideBarItemTextClsString = "sidebar-item-text";
            let selected = false;

            let subItemsRenderHandler = ()=>{
                selectedId(sideBarItem.id);
                if(sideBarItem.tabs){
                    menu ? showMenu(false) : showMenu(true);
                }

            };
            let renderSubItems = ()=>{
                let sideBarSubItemClsString = "sidebar-item";
                // let sideBarSubItemTextClsString = 'sidebar-item-text';
                let sideBarMenu = [];
                sideBarItem.tabs.map((subItems,index)=>{
                    sideBarMenu.push(
                        <NavLink to = {subItems.link} className={sideBarSubItemClsString} key={index}>
                            {subItems.text}
                        </NavLink>
                    );
                });
                return sideBarMenu;
            };

            if(id === sideBarItem.id){
                sideBarItemClsString = "sidebar-item sidebar-item-selected";
                sideBarItemTextClsString = "sidebar-item-text sidebar-item-text-selected";
                selected = true;
            }
            sideBarItems.push(
                <div onClick={subItemsRenderHandler} className={sideBarItemClsString} key={sideBarItem.id}>
                    <div>
                        <Icon name={sideBarItem.icon} size={"big"} color={selected ? "blue" : "grey"} style={{ margin: "0 1rem" }}/>
                        <div className={sideBarItemTextClsString}>
                            <div>{sideBarItem.text}</div>
                        </div>
                    </div>
                    <div>
                        { menu && sideBarItem.tabs ? renderSubItems() : null}
                    </div>
                </div>
            );
        });
        return sideBarItems;
    };
    return(
        <div className='sidebar-item-container'>
            {renderSidebar()}
        </div>
    );
};
export default DesignSideBar;
