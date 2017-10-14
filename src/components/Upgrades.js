import React from 'react'
import '../css/Upgrades.css'
import $ from 'jquery'



export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
// componentDidMount () {
//   $(window).on('load resize', function() {
//         var divHeight = $('.kitchenContainer').height();
//         $('.uptext_container').css('height', divHeight+'px');
//     });
// }

  render() {
    return (
      <div className='container kitchenContainer'>
        <div className='row innerKitchenContainer'>
          <div className='col-md-6 col-sm-12 kitchen_container'>
            <img className="img-responsive kitchenRendering-img"src="/images/pwestlivingrm.png" align="right;"/>
          </div>
          <div className='col-md-6 col-sm-12 uptext_container'>
            <div id="upgradetext">
              <h1 className='bonusHeader'>Limited Time Bonus</h1>
              <p className="upgradesSecondary">For a limited time, get free hardwood,<br />granite, appliances & more!</p>
              <button type="button"className="btnflt3"><small>VIEW DETAILS
              </small></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
