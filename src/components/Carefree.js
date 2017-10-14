import React from 'react'
import '../css/Carefree.css'

export class Carefree extends React.Component {

  render() {
    return (
      <div className='row carefree_container'>
        <div className='col-md-6 col-sm-12 carefree_style'>
          <div className='carefree_box'>
              <img id="elderly" src="images/couple.jpg" alt="Image"/>
          </div>
        </div>

        <div className='col-md-6 col-sm-12 carefree_text'>
          <div className='careText_Box'>
            <h1 id='cfheading'>Carefree Living.<br/>A Beautiful Location.</h1>
            <p id='cfp'>It's a lifestyle that's as carefree or adventurous as you make it. With a beautiful location that's minutes to the shops, restaurants and services of downtown and moments from trails, green space and outdoor activity.</p>
          </div>
        </div>

      </div>

    );
  }


}

export default Carefree;
