import React from "react";
import Layout from "../components/base/Layout";
import DetailsCard from "../components/base/DetailsCard";
import { Card } from "semantic-ui-react";
import "../assets/scss/pages/products.scss";

const Products = ()=>{
    return (
        <Layout>
            <DetailsCard
                description={"Checkout Our Products"}
                header={"Products"}/>
                <Card.Group itemsPerRow={2} className='product-container'>
                    <Card className='product-card' color='red' header='MAILING BOXES'/>
                    <Card className='product-card' color='orange' header='SHIPPING BOXES'/>
                    <Card className='product-card' color='yellow' header='VINOPACKAGING'/>
                    <Card className='product-card' color='blue' header='EVENT BOXES'/>
                    <Card className='product-card' color='brown' header='SECURE PIZZA BOX'/>
                    <Card className='product-card' color='green' header='POINT OF PURCHASE'/>
                </Card.Group>
        </Layout>
    );
};
export default Products;
