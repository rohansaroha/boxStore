import React from "react";
import Layout from "../components/base/Layout";
import DetailsCard from "../components/base/DetailsCard";
import { Form } from "semantic-ui-react";
import "../assets/scss/pages/contact.scss";

const Contact = ()=>{
    return (
        <Layout>
            <DetailsCard
                description={"Fill in the form below and We will get back to you."}
                header={"Contact Us"}/>
                <Form className='contact-form-container'>
                    <Form.Group widths='equal'>
                        <Form.Input className='contact-input' type='text' label='Name' placeholder='ABC'/>
                        <Form.Input className='contact-input' type='text' label='Email' placeholder='ABC@gmail.com'/>
                    </Form.Group>
                    <Form.Input className='contact-description' type='text' label='Description'/>
                    <div className='contact-submit'>
                        <span>Send Message</span>
                    </div>
                </Form>
        </Layout>
    );
};
export default Contact;
