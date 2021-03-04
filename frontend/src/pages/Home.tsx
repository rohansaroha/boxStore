import React from "react";
import "../assets/scss/pages/home.scss";
import Layout from "../components/base/Layout";
import HeroComponent from "../components/home/HeroComponent";
import FooterComponent from "../components/base/FooterComponent";
import Favourite from "../components/home/Favourite";
import HomeContent from "../components/home/HomeContent";

const Home = ()=>{
    return(
        <Layout>
            <div className='home-main-container'>
                <HeroComponent/>
                <HomeContent/>
                <Favourite/>
                <FooterComponent/>
            </div>
        </Layout>
    );
};
export default Home;
