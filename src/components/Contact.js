import React from 'react'
import '../css/Contact.css'

export default (props)=> {
  return (
    <div className='contact-container'>
      <div className='row'>
        <div className='col-md-6 chat_style'>
          <div className="question_box">
            <h3 className="help-content">Got a question? We're here to help.</h3>
            </div>
        </div>
        <div className='col-md-2 col-xs-4 contactItem'>
          <div className="message_box">
            <img src="images/pWestChat.png" alt="Image" alt="Image"/>
            <span className="chat_text">
              <a>Live Chat</a>
            </span>
          </div>
        </div>
        <div className='col-md-2 col-xs-4 middleContact contactItem'>
          <div className="phone_box">
            <a href="tel:855-848-4665"><img src="images/phoneIcon.png" alt="Image" alt="Image"/></a>
            <span className="phone_number">
              <a href="tel:855-848-4665">1-855-848-4665</a>
            </span>
          </div>
        </div>
          <div className='col-md-2 col-xs-4 contactItem'>
            <div className="mailer_box">
              <a href="mailto:info@parkviewhomes.ca?subject=Breeze Inquiry"><img src="images/pWestMailer.png" alt="Image"/></a>
              <span className="mail-address">
                <a href="mailto:info@parkviewhomes.ca?subject=Breeze Inquiry">info@parkviewhomes.ca</a>
              </span>
            </div>
          </div>
        </div>
      </div>
  );
};
