import React from "react";
import Layout from "../components/base/Layout";
import DetailsCard from "../components/base/DetailsCard";

const Mission = ()=>{
    return (
        <Layout>
            <DetailsCard
                description={"Find out who We are , where we are from and what we Do."}
                header={"Mission"}/>
        </Layout>
    );
};
export default Mission;
