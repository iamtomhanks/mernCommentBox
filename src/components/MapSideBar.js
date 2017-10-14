import React from 'react';
import MapSideBarCategory from './MapSideBarCategory'
import $ from "jquery";

export default class MapSideBar extends React.Component {
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
  
  renderSideBarCategory() {

    return (

      this.props.categoryNames.map(function(item, index){

        //if current category is active, display fill circle icon in side bar
        var sideBarIcon;
        if(this.state.activeCategories.indexOf(item) == -1){
          sideBarIcon = 'images/map/'+item+'_hollow.svg';
        }
        else {
          sideBarIcon = 'images/map/'+item+'_solid.svg';
        }
        return <MapSideBarCategory
          onClick={() => this.props.onClick(item)}
          value={item}
          sideBarIcon={sideBarIcon}
          activeCategories={this.state.activeCategories}
          amenitiesHover={this.props.amenitiesHover}
          amenitiesHoverExit={this.props.amenitiesHoverExit}
        />


      },this)



    );
  }

  toggleMapSideBar(){
    var status = $(".mapSideBarCategory").css("display");
    if(status == "block") {
        $(".mapSideBarCategory").hide("slow");
        $(".mapSideBar").css("padding", "4rem 0 0 2rem");
        $(".AmenitiesSidebarH4Img").attr("src", "images/down.svg");
    }
    else {
      $(".mapSideBarCategory").show("slow");
      $(".mapSideBar").css("padding", "4rem 4rem 4rem 2rem");
      $(".AmenitiesSidebarH4Img").attr("src", "images/up.svg");
    }
  }
  render() {
    const style = {
      position: 'absolute',
      right: '0',
      top: '0',
      background: 'rgba(255, 255, 255, 0.88)',
      overflow: 'scroll',
      padding: '4rem',
      paddingLeft: '2rem',
      fontFamily: 'BellGothicStd-Light',
      maxHeight: '100%'

    }

    return (
      <div style={style}className="mapSideBar">
        <h4 className="AmenitiesSidebarH4" onClick={this.toggleMapSideBar}>Start your search here <img className="AmenitiesSidebarH4Img" src="images/up.svg"/></h4>
        {this.renderSideBarCategory()}
      </div>
    )
  }
}