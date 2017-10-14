import React from 'react';
import $ from "jquery";
import MapAmenityListItem from './MapAmenityListItem';


export default class MapSideBarCategory extends React.Component {
 constructor(props) {
      super(props);
      this.activeCategories = this.props.activeCategories;
      this.state = {
        activeCategories: this.activeCategories

      }

  }
  componentWillReceiveProps(nextProps) {
    this.setState({ activeCategories: nextProps.activeCategories });
  }
  
  renderAmenitiesList() {
    var data = require('../Amenities.json');

    return (

      data.map(function(item, index){
        if((this.props.value == item.Category) && (this.state.activeCategories.indexOf(item.Category) != -1)) {
          return <MapAmenityListItem 
                  name={item.Name} itemID={item.ID} 
                  category={item.Category} 
                  amenitiesHover={() => this.props.amenitiesHover(item.ID)}
                  amenitiesHoverExit={() => this.props.amenitiesHoverExit(item.ID)}/>
        }
      },this)

    );
  }
  render(props) {
   
    return (
      <div>
        <h3 className="mapSideBarCategory" onClick={() => this.props.onClick()}>
          {this.props.value}
          <div className="mapsideBarIcon"><img src={this.props.sideBarIcon}/></div>
        {this.renderAmenitiesList()}

        </h3>
      </div>
    );
  }
}rigin