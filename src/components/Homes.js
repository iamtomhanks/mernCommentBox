import React from 'react'
import '../css/Homes.css'
import { BrowserRouter as Router } from 'react-router-dom'

export default class Homes extends React.Component {

  renderHomes() {
    
  }

  render() {
    return(
      <div className='row homesDesigns_container'>
        <div className='col-md-12 col-sm-12 features_style'>
          <div className='homesDesigns_Heading'>
            <h1 id='features1'>HOME DESIGNS</h1>
              <div className='row homesTextcontainer'>
                <p id='homesText'>The Breeze community offers smartly designed and appointed townhomes and semis with generous sized windows, quaint covered porches and beautiful landscaping front and rear, maintained year round for you to enjoy. All the homes also feature their own backyard deck, perfect for unwinding with a book or entertaining on a warm summer’s eve. With Breeze’s picturesque architecture, harmonious streetscapes and carefree lifestyle, all you have to do is move in and relax.</p>
              </div>
          </div>
        </div>
        <div className=" row parallelogram_container">
          <div className="col-md-4 col-sm-4 parallelogram_style">
            <div className="parallelogram">
              <h1 id="townsheading">Towns</h1>
            </div>
          </div>
          <div className="col-md-8 col-sm-8 townstext_style">
            <div className="towns_box">
              <p id="townstext">Each townhome features maintenance-free landscaping and<br />a backyard deck for relaxing or entertaining.</p>
            </div>
          </div>
        </div>
      <div id="products" className="row list-group">
          <div className="item  col-xs-4 col-lg-4">
            {this.renderHomes()}
          </div>
      </div>
    </div>

    );
  }




};
