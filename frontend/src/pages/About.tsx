import React from "react";
import Layout from "../components/base/Layout";
import DetailsCard from "../components/base/DetailsCard";
import "../assets/scss/pages/about.scss";

const About = ()=>{
    return (
        <Layout>
            <DetailsCard
                description={"Find out who We are , where we are from and what we Do."}
                header={"About Us"}/>
            <div className='al-container'>
                <h1 className='al-header'><span>Welcome to Sharp Graphs & Gears</span></h1>
                <div className='al-content'>
                    <span>
                        SHARP GRAPHS & GEARS is one of the established laser die maker founded in <span className='al-bold'>1978</span> as a manual die maker and is located in <span className='al-bold'>Ludhiana</span> City of Punjab. We are serving the industry since 1978 & became the solution provider to industry & also strategically growing with the emerging market in India. We thank to all our clients for doing business with us. As a quality minded entity & with primarily focused on quality we are the first in Ludhiana City of Punjab to introduce laser dies by installing the latest machinery in Laser Cutting & Auto Rule Processor. We are the first to equip the world class <span className='al-bold'>State Of The Art, Technical Knowhow, Large Experience</span> which enables us to provide any kind of solution to the printing & packaging industry.
                        We Manufacturers of all kinds of <span className='al-bold'>Manual & Laser Dies For Card Board Boxes, Corrugated Carton, Label, Cuff, Collar & Ladies Suit Gala Cutting, Wedding Cards & Boxes, Gaskets, Blister Cutting, Tags Dies Etc.</span>. We manufacture these products incorporating genuine grade of imported materials, which is specialized for die making. Prior to using them, a separate team of quality analysts stringently test them. This enables us to ensure adherence to international Quality Standards. In addition, we also provide services of Laser cutting, catering to several industries of Architect industry, Automobile Industry, computer Industry and Cosmetic Industry & all sorts of wood works. With real-time experience and full grasp of the market functionality, we have been able to carry our business in a prolific way. We work with full transparency, and serve clients in a cost-effective way. We have been able to meet customer’s varied needs by providing products that are widely appreciated for their varied associated attributes.<span className='al-bold'> Under the Strict Direction of “Mr. Roshan Lal, Mr.Ajay Kumar, Mr. Ravi Kumar & Mr. Krishan Kumar”, we have achieved an alleged name in the Die Making Industry.</span>
                    </span>
                </div>
            </div>
            <div className='al-team-container'>
                <h1 className='al-header'>OUR TEAM</h1>
                <div className='al-profile-container'>
                    <div className='al-profile'>
                        <div className='al-profile-image'>
                            <img src='' alt=''/>
                        </div>
                        <div className='al-profile-name'>
                            <span>Mr. ROSHAN LAL</span>
                        </div>
                        <div className='al-profile-experience'>
                            <span>
                                Started business in 1978 <br/>
                                Experience of 41 Years
                            </span>
                        </div>
                    </div>
                    <div className='al-profile'>
                        <div className='al-profile-image'>
                            <img src='' alt=''/>
                        </div>
                        <div className='al-profile-name'>
                            <span>Mr.AJAY KUMAR</span>
                        </div>
                        <div className='al-profile-experience'>
                            <span>
                                Joined business in 1993<br/>
                                Experience of 26 Years
                            </span>
                        </div>
                    </div>
                    <div className='al-profile'>
                        <div className='al-profile-image'>
                            <img src='' alt=''/>
                        </div>
                        <div className='al-profile-name'>
                            <span>Mr. RAVI KUMAR</span>
                        </div>
                        <div className='al-profile-experience'>
                            <span>
                                Joined business in 2001 <br/>
                                Experience of 18 Years
                            </span>
                        </div>
                    </div>
                    <div className='al-profile'>
                        <div className='al-profile-image'>
                            <img src='' alt=''/>
                        </div>
                        <div className='al-profile-name'>
                            <span>Mr. KRISHAN KUMAR</span>
                        </div>
                        <div className='al-profile-experience'>
                            <span>
                                Joined business in 2004 <br/>
                                Experience of 15 Years
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='al-footer'>
                <span>
                    Together As a team we have a experience of 41 + 26 + 18 + 15 = 100 Years of Combined individual experience.<br/>
                    Number of flawless dies made so far ( Assumption ) = 41 years x 20 dies a day (let ’ s assume ) x 25 days in month = 246000 dies approx. <br/>
                    What ever your work, come to us, your job is not a product, it’s a project for us, we will serve you best to our knowledge & experience
                </span>
            </div>
        </Layout>
    );
};
export default About;
