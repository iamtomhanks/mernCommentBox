import React from 'react'
import '../css/Sidebar.css'

export default (props)=> {
  return (
    <div className='side_box'>
      <div className="side_menu">
        <a href="#">Community</a>
        <a href="#">Area Map</a>
        <a href="#">Home Designs</a>
        <a href="#">Site Plan</a>
        <a href="#">Features<br />& Finishes</a>
        <div className="signup_btn_container">
          <div className="signupbtn">
            <a id="blue" href="#">SIGN UP</a>
          </div>
        </div>
      </div>
    </div>
  );
};
