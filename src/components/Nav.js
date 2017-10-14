import React from 'react'
import '../css/Nav.css'
import $ from 'jquery'

export default class Header extends React.Component {
  constructor(props) {
    /**
     * @param {Props} props
     * @return {Bind} this.handler
     */
    super(props);
    this.menuClick = this.menuClick.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  menuClick(e){
    $('.navMenuRow').toggleClass('navOpen');
  }
  closeMenu(e){
    $('.navMenuRow').removeClass('navOpen');
  }
  render() {
    return (
    <div className="NavRootOuterContainer">
      <div className="navRootContainer">
        <div className='row navMenuRow'>
          <img src="images/x.png" className="closeMenu" onClick={this.closeMenu}/>
          <div className="logo-container">
            <div className="Pview-logo">
              <a href="">
                <img src="../images/logo_desktop.svg"></img>
              </a>
            </div>
          </div>
          <div className="nav_style firstNav">
            Area
          </div>
          <div className="nav_style">
            <div className="dropdown">
              <div className="dropdown-toggle" type="button" data-toggle="dropdown">Communities
              <span className="caret"></span></div>
              <ul className="dropdown-menu">
                <div className="row">
                  <div className="col-md-6">
                    <div className="pwest-breeze">
                      <li><a href="#">Parkwest</a></li>
                      <li><a href="#">Breeze</a></li>
                    </div>
                    <div className="community1">
                      <li><a tabindex="-1" href="#">New Community</a></li>
                      <li><a tabindex="-1" href="#">New Community</a></li>
                      <li><a tabindex="-1" href="#">New Community</a></li>
                    </div>
                  </div>
                  <div className="col-md-6 drop_style">
                    <div className="community2">
                      <li><a tabindex="-1" href="#">New Community</a></li>
                      <li><a tabindex="-1" href="#">New Community</a></li>
                      <li><a tabindex="-1" href="#">New Community</a></li>
                      <li><a tabindex="-1" href="#">New Community</a></li>
                      <li><a tabindex="-1" href="#">New Community</a></li>
                    </div>
                  </div>
                </div>
                  <div className="dropdown-footer">
                    <p>Past Communities</p>
                  </div>
              </ul>
            </div>
          </div>

          <div className="nav_style">
            About Us
          </div>
          <div className="nav_style">
            Design
          </div>
          <div className="nav_style">
            Warranty
          </div>
          <div className="nav_style">
            Contact Us
          </div>


         </div>
       </div>
       <div className="MobileNavContainer">
          <img src="images/ParkviewLogo.png" className="HiddenLogo" />
          <img src="images/ParkviewLogo.png" className="VisibleLogo" />
          <img src="images/ham.png" className="HamLogo" onClick={this.menuClick} />
      </div>
    </div>
    )
  }

};
