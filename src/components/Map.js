import React from 'react'
import '../css/Map.css'

export default (props)=> {
  return (

      <div className='row mapRow'>
        <div className='col-md-6 col-sm-12 contact_style'>
          <div className="text_box">
            <div className="adult-condo">
              <h1 className="adultCondosHeader">Adult Condo Bungalow Towns<br/> mid $400's</h1>
            </div>
            <div className="condo-text">
              <p id="building-text">A boutique enclave of new bungalow townhomes on a little hilltop
              overlooking the Otonabee River in Peterborough, just under an hour from the GTA. It's a lifestyle that's as
              simple and carefree or adventurous as you make it. Its time.
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-sm-12 map_style '>
          <div className="map_box">
            <img id="mapper" src="images/PTBOmap-sm.png" alt="Image"/>
          </div>
        </div>
      </div>

  );

};
