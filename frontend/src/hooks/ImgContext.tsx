import React, { useState, createContext, useEffect } from "react";
import { imgRenderBackendApi } from "../services/imgRenderBackendApi";

interface IImg{
    imgSrc:string,
    imgSrc2:string
}

export const ImgContext = createContext({
    imgSrc: "",
    imgSrc2: ""
});

export const ImgProvider = ({ children }:{children:React.ReactNode})=>{
    const providerValue = useProviderImg();
    return <ImgContext.Provider value={providerValue}>{children}</ImgContext.Provider>;

};

const useProviderImg = ():IImg=>{
    const [imgSrc,SetImgSrc] = useState<string>("");
    const [imgSrc2,SetImgSrc2] = useState<string>("");

    useEffect( ()=>{
        imgRenderBackendApi.imgRender("0423")
            .then((res)=>{
                const bytes = new Uint8Array(res.data);
                const blob = new Blob( [ bytes ], { type: "image/jpeg" } );
                const urlCreator = window.URL || window.webkitURL;
                const imageUrl = urlCreator.createObjectURL( blob );
                SetImgSrc(imageUrl);
            })
            .catch((err)=>{
                console.log(err);
            });

        imgRenderBackendApi.imgRender("0427")
            .then((res)=>{
                const bytes = new Uint8Array(res.data);
                const blob = new Blob( [ bytes ], { type: "image/jpeg" } );
                const urlCreator = window.URL || window.webkitURL;
                const imageUrl = urlCreator.createObjectURL( blob );
                SetImgSrc2(imageUrl);
            })
            .catch((err)=>{
                console.log(err);
            });
    },[]);
    return {
        imgSrc,
        imgSrc2
    };
};
