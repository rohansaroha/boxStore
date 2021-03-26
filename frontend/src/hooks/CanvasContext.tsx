import React, { useState, createContext } from "react";

export const CanvasContext = createContext({
    canvasImgSrc: "",
});

export const CanvasProvider = ({ children }:{children:React.ReactNode})=>{
    const providerValue = useProviderImg();
    return <CanvasContext.Provider value={providerValue}>{children}</CanvasContext.Provider>;
};

const useProviderImg = ():any=>{
    const [canvasImgSrc,setCanvasImgSrc] = useState<string>("");
    return [canvasImgSrc,setCanvasImgSrc];
};
