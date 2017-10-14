import React from 'react';
import MapSideBarCategory from './MapSideBarCategory'
import $ from "jquery";

export default class MapAmenityListItem extends React.Component {

	// componentWillMount() {
	// 	$('.mapAmenityListItem').on("click", function(){
	// 		alert(this.props.itemID);
	// 	});
	// }

  render() {
    var category = this.props.category;
    var itemID = this.props.itemID;
    return (
      <div className={'mapAmenityListItem-'+itemID + ' mapAmenityListItem mapAmenityListItem-' + category} onMouseEnter={this.props.amenitiesHover} onMouseLeave={this.props.amenitiesHoverExit}>
        {this.props.name}
      </div>
    );
  }
}