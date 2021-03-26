import React from "react";
import Layout from "../components/base/Layout";
import DetailsCard from "../components/base/DetailsCard";
import { Card } from "semantic-ui-react";
import "../assets/scss/pages/services.scss";

const Services = ()=>{
    return (
        <Layout>
            <DetailsCard
                description={"Services which we gave"}
                header={"Services"}/>
            <Card.Group itemsPerRow={2} className='services-container'>
                <Card className='product-card' color='red' header='Diemaking'/>
                <Card className='product-card' color='orange' header='Packaging Design'/>
                <Card className='product-card' color='yellow' header='Web2Pack'/>
            </Card.Group>
        </Layout>
    );
};
export default Services;
