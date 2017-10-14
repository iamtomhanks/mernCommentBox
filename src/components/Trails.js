import React from 'react'
import '../css/Trails.css'

export default (props)=> {
  return(
    <div className="row trails_container">
          <div className='col-md-6 col-sm-12 col-sm-push-6 trailsImage_box'>
        <img id="trails_image" src="images/trailscouple.jpg" alt="Image"/>
      </div>
      <div className='col-md-6 col-sm-12 col-sm-pull-6 trails_style'>
        <div className='trails_text_box'>
          <h1 id="tText">Shops & Restaurants, Meet Trails & Green Space.</h1>
          <p id="tTextp">Breeze is located at the intersection of convenience and inspiration, minutes from Hwy 35/115, the future  407  and  everything downtown Peterborough has to offer. It's even closer yet to the trails and refreshing landscape of the Otonabee river. </p>
        </div>
      </div>

    </div>
  );
};
