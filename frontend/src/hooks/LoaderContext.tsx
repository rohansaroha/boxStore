import React, { useState, createContext } from "react";

export const LoaderContext = createContext({
    loader: false,
});

export const LoaderProvider = ({ children }:{children:React.ReactNode})=>{
    const providerValue = useProviderImg();
    return <LoaderContext.Provider value={providerValue}>{children}</LoaderContext.Provider>;
};

const useProviderImg = ():any=>{
    const [loader,setLoader] = useState<boolean>(false);
    return [loader,setLoader];
};
