import React from 'react'
import '../css/Features.css'

export default (props)=> {
  return (
    <div className='row features_container'>
      <div className='col-md-12 col-sm-12 features_style'>
        <div className='featuresHeading'>
          <h1 id='features1'>FEATURES + FINISHES</h1>
            <div className='row featuresbtncontainer'>
              <button type="button"className="featbtn">
                <large>DOWNLOAD LIST</large>
              </button>
              <p id='featuresText'>All beauty, all style, all included. Home is where your style is. It's where your comfort comes first. Every home at Breeze delivers on these notions to create spaces where you feel your best. Discover beautiful, two-tone designer kitchens with modern conveniences like 12x24 tiles, soft close doors and a USB charging station, spa-inspired ensuites with walk-in glass shower and quality Moen fixtures and satin nickel door hardware throughout. It's all included and all for you to enjoy</p>
            </div>
        </div>
      </div>
    <section>
    <div className="container gal-container">
      <div className="row">
        <div className="col-md-4 col-sm-4 col-xs-5 gal-item img-overlay">
          <div className="box">
            <img src="images/kitchen.jpg" />
              <div className="overlay overlayOne">Extended breakfast bar</div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-5 gal-item img-overlay mobileRearrange">
          <div className="box ">
            <img src="images/bbq.jpg" />
              <div className="overlay overlayMulti">Gas BBQ line<br />rough-in</div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-12 gal-item img-overlay mobileRearrangeTwo" >
          <div className="box ">
            <img src="images/outlet.jpg" />
              <div className="overlay overlayMulti">USB outlet - convenient<br />charging station for<br />all electronics</div>
          </div>
        </div>
    </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-5 gal-item img-overlay">
            <div className="box bigBox">
              <img src="images/cabinet.jpg" />
                <div className="overlay">Valance with under-cabinet lighting</div>

            </div>
          </div>
          <div className="col-md-6 coNoPad">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-5 gal-item img-overlay mobileRearrange faucet">
              <div className="box">
                <img src="images/fossett.jpg" />
                  <div className="overlay overlayMulti">Designer chrome<br />faucet with pullout<br />sprayer</div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-5 gal-item img-overlay res mobileRearrange">
              <div className="box">
                <img src="images/spicerack.jpg" />
                  <div className="overlay">Built-in spice tray</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-5 gal-item img-overlay featuresBottomLarge">
              <div className="box">
                <img src="images/flooring.jpg" />
                  <div className="overlay overlayMulti">Kitchen and front entry<br />12” x 24” porcelain<br />tile flooring</div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-5 gal-item img-overlay res featuresBottomSmall mobileRearrange">
              <div className="box">
                <img src="images/countertop.jpg" />
                  <div className="overlay overlayMulti">Two-tone cabinets<br />and/or countertops</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



</div>


  );
};
