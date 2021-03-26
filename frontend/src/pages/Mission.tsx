import React from "react";
import Layout from "../components/base/Layout";
import DetailsCard from "../components/base/DetailsCard";
import "../assets/scss/pages/mission.scss";

const Mission = ()=>{
    return (
        <Layout>
            <DetailsCard
                description={"Find out who What are Mission is ?"}
                header={"Mission"}/>
                <div className='mission-container'>
                    <h1>Our Mission In Life To Give The Printers Q.P.S</h1>
                    <h2>
                        <li>BEST <span className='mission-container-resize'>Q</span>UALITY</li>
                        <li>BEST <span className='mission-container-resize'>P</span>RICE</li>
                        <li>BEST <span className='mission-container-resize'>S</span>ATISFACTION</li>
                    </h2>
                </div>
        </Layout>
    );
};
export default Mission;
