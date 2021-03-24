import React from "react";
import Layout from "../components/base/Layout";
import DetailsCard from "../components/base/DetailsCard";

const Services = ()=>{
    return (
        <Layout>
            <DetailsCard
                description={"Find out who We are , where we are from and what we Do."}
                header={"Services"}/>
        </Layout>
    );
};
export default Services;
