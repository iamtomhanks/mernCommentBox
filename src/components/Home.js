import React from 'react'
import '../css/Homes.css'

export default class Homes extends React.Component {


  render() {
    return(
      <div className="thumbnail homeItemContainer" onClick={() => this.props.history.push('/homedetails/1')}>
          <img className="group list-group-image" src="images/homeProduct.jpg" alt="" />
          <div className="caption">
              <div className="row">
                  <div className="col-xs-6 col-md-6">
                     <h4 className="group inner list-group-item-heading productTitle">
                  BLOSSOM</h4>
                  </div>
                 <div className="col-xs-6 col-md-6 productTitlePrice">
                      <span className="productSubTitle">from</span><span className="productSubPrice">$000,000</span>
                  </div>
              </div>
              <div className="row">
                  <div className="col-xs-4 col-md-4  productTitleFeet">
                      <span className="productSubPrice">1,200</span><span className="productSubTitle">sq.ft.</span>
                  </div>
              <div className="col-xs-4 col-md-4 productTitlePrice">
                      <span className="productSubPrice">3<img className="img-responsive bedIcon"src="images/bedroomIcon.png"/></span>
                  </div>
                  <div className="col-xs-4 col-md-4 productTitlePrice">
                      <span className="productSubPrice">3<img className="img-responsive bathIcon"src="images/bathIcon.png"/></span>
                  </div>
              </div>
          </div>
      </div>
    );
  }




};
