import React from 'react'
import '../css/HomeDetails.css'
import Nav from './Nav';

export class HomeDetails extends React.Component {
  constructor(props) {
    super();
    this.state = {
      homeID: props.match.params.homeID,
      elevationSelected: 'A'
    }
  }

  componentWillMount(){
  }
  updateActiveElevation(elevation) {
    this.setState({
      elevationSelected: elevation
    });
  }
  renderElevationToggleButtons() {
    var data = require('../homes.json');

    return (
      data.map(function(item, index){
        if(this.state.homeID == item.homeID) {
          var activeClass;
          //change style of active and inactive buttons
          if(item.Elevation == this.state.elevationSelected) {
              activeClass = 'elevationToggleButtonActive';
          }
          else {
            activeClass = 'elevationToggleButtonInactive';
          }
          return <div className={"elevationToggleButton "+item.Category+"-backgroundColor " + activeClass} onClick={() => this.updateActiveElevation(item.Elevation)}> Elevation {item.Elevation}</div>
        }
      },this)
    );
  }
  renderElevationImageAndInfo() {
    var data = require('../homes.json');

    return (
    data.map(function(item, index){
      if((this.state.homeID == item.homeID) && (this.state.elevationSelected == item.Elevation)) {
        return <div>
                 <div className="elevationImageContainer">
                    <img src={"../images/homes/"+item.Image+".png"}/>
                 </div>

                 <div className={"infoContainer "+item.Category+"-backgroundColor"}>
                    <div className="elevationToggleButtonContainer">
                       {this.renderElevationToggleButtons()}
                    </div>
                 </div>
              </div>
      }

      },this)
    );
  }

  render() {
    const infoContainerColor = '';
    return (
      <div>
        <Nav/>

        {this.renderElevationImageAndInfo()}


        <div className="floorplanContainer">
        </div>
      </div>
    );
  }
};

export default HomeDetails;
