import React from "react";
import Layout from "../components/base/Layout";
import "../assets/scss/pages/account.scss";
import { Message } from "semantic-ui-react";

const Account = ()=>{
    const items = [
        "You can now have cover images on blog pages",
        "Drafts will now auto-save while writing",
    ];

    return (
        <Layout>
            <div className='account-main-container'>
                <div className='settings-main-container'>
                    <div className='settings-info-container'>
                        <div className='settings-info-header'>
                            <span>PERSONAL INFO</span>
                        </div>
                        <div className='settings-info-profile-container'>
                            <div className='settings-info-profile-header'><span>Profile Picture</span></div>
                            <div className='settings-info-profile-img'><img src='' alt=''/></div>
                        </div>
                        <div className='settings-info-name-container'>
                            <div className='settings-info-name-header'><span>Name</span></div>
                            <div className='settings-info-name'><span>ABC</span></div>
                        </div>
                        <div className='settings-info-email-container'>
                            <div className='settings-info-email-header'><span>Email</span></div>
                            <div className='settings-info-email'><span>ABC.74747@gmail.com</span></div>
                        </div>
                        <div className='settings-info-password-container'>
                            <div className='settings-info-password-header'><span>Password</span></div>
                            <div className='settings-info-password'><span>**********</span></div>
                        </div>
                    </div>
                    <Message>
                        <Message.Header>New Site Features</Message.Header>
                        <Message.List items={items} />
                    </Message>
                    <div className='settings-button'>
                        <span>Submit</span>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default Account;
