import React from "react";
import './faq.css';
import faqsbanner from '../../../assets/faqsbanner.jpg'
import FaqAccordion from './accordian';

export default function FAQs(){
    return(
        <div className="container">
          <div className="faq">
            <p style={{fontWeight: '600', color: '#2AA7FF', marginBottom: 'unset', paddingTop: '15px'}}>Get Your Answer</p>
            <h1 style={{color: '#1B3C74', margin:'unset'}}>Frequently Asked Questions</h1>
            <div className="content">
                <div>
                    <img src={faqsbanner} alt="image" />
                </div>
                <div className="accordian">
                    <FaqAccordion />
                </div>
            </div>
            </div>  
        </div>
    )
}