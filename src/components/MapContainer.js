import React from 'react';
import GoogleApi from './GoogleApi';
import MapSideBar from './MapSideBar';
import GoogleApiComponent from './GoogleApiComponent';
import {Marker} from './Marker';
import {InfoWindow} from './InfoWindow';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import $ from "jquery";
import '../css/AreaMap.css';

export class MapContainer extends React.Component {
  constructor() {
      super();
      this.state = {
          categoryNames: [
            'Shopping & Groceries',
            'Health and Wellness',
            'Education',
            'Recreational Culture',
            'Parks & Trails',
            'Restaurants & Theatre',
            'Emergency Services',
            'Government Offices & Places of Worship',
            'Public Transit',
            'Banks'
          ],
          activeCategories: Array(10).fill(null),
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {},
          amenityNameHovered: null
      }
  }


  onMarkerClick(item, e, marker) {
     this.setState({
      selectedPlace: item,
      activeMarker: marker,
      showingInfoWindow: true
    });
    $(".gm-style-iw").next("div").hide();
    $(".gm-style-iw").css("width","250px");
    $(".gm-style-iw").css("z-index","200000");
    // $(".gm-style-iw").next("div").css("width","100%");
    $(".gm-style-iw").parent().css("width","100%");
    $(".gm-style-iw").children().css("width","100%!important");

    // Reference to the DIV that wraps the bottom of infowindow
   var iwOuter = $('.gm-style-iw');
   var iwBackground = iwOuter.prev();
   iwOuter.addClass('iwOuter');
   iwOuter.parent().addClass('iwOuterParent');
   iwOuter.children().css({'width' : '350px'});
   iwOuter.parent().css({'width' : '350px'});
    // Removes background shadow DIV
    iwOuter.children(':nth-child(1)').css({'max-width' : '299px'});
    iwBackground.children(':nth-child(2)').css({'display' : 'none'});

    // Removes white background DIV
    iwBackground.children(':nth-child(4)').css({'display' : 'none'});
  }

  InfoWindowClosed(){
    this.setState({
      showingInfoWindow: false
    });
  }
  handleSideBarClick(categoryClicked) {
    $(".ExploreAmenities").css("display","none");
    var tempArray = this.state.activeCategories.slice();
    var index = tempArray.indexOf(categoryClicked);
    if(index == -1){
      tempArray.push(categoryClicked);
    }
    else {
      tempArray.splice(index, 1);
    }
    this.setState({ activeCategories: tempArray });
  }
  renderMarkers(){
    var data = require('../Amenities.json');
    //if there is an amenity name hovered, only show that marker, else show whole category
    // console.log();
     //item not hovered
        var amenityHovered;
        if(this.state.amenityNameHovered == null) {
          amenityHovered = false;
        }

        else {
          amenityHovered = true;
        }

        return (
        data.map(function(item, index){
          if(this.state.activeCategories.indexOf(item.Category) != -1) {
            var cords = item.Coordinates.split(',');
            var latitudeProp = cords[0];
            var longitudeProp = cords[1];
            let onMarkerClick = this.onMarkerClick.bind(this, item);
            if(amenityHovered){
                var amenityHoverBounce = false;
              if(this.state.amenityNameHovered == item.ID){
                amenityHoverBounce = true;
              }
            }
            return  <Marker onClick={onMarkerClick}
                    latitude={latitudeProp} longitude={longitudeProp}
                    category={item.Category}
                    title={item.Name}
                    amenityHoverBounce={amenityHoverBounce}/>
          }

        },this)
      );


      return (
      data.map(function(item, index){
        if(this.state.amenityNameHovered == item.ID) {
          // console.log(amenityHoverBounce);

          var cords = item.Coordinates.split(',');
          var latitudeProp = cords[0];
          var longitudeProp = cords[1];
          let onMarkerClick = this.onMarkerClick.bind(this, item);
          let currentMarkerObject = this.currentMarkerObject.bind(this, item);

          return  <Marker onClick={onMarkerClick}
                  latitude={latitudeProp} longitude={longitudeProp}
                  category={item.Category}
                  title={item.Name}
                  amenityHoverBounce={true}
                  currentMarkerObject={currentMarkerObject}/>
        }

      },this)
    );





  }
  renderMapInfoWindowMedia() {
    if(this.state.selectedPlace.ID){
      var mediaSource;
      var mediaElement;
      if (this.state.selectedPlace.Video_Path == '') {
        mediaSource = "https://s3.amazonaws.com/parkview.ca/AmenitiesMapImages/"+this.state.selectedPlace.Screenshot+".jpg";

        return (
          <img className="InfoImage" src={mediaSource}/>
        );

      } else {
        mediaSource = "https://s3.amazonaws.com/parkview.ca/AmenitiesMapVideos/"+this.state.selectedPlace.Video_Path+".mp4";

        // mediaElement = "<video class='MapVideo' autoplay='autoplay'  loop='true' muted  src='https://s3.amazonaws.com/parkview.ca/AmenitiesMapImages/'"+mediaSource+".mp4' type='video/mp4'>";
        return (
          <video autoPlay='autoplay'  loop='true' muted  src={mediaSource} type='video/mp4' className="MapVideo"/>
        );
      }
    }
  }
  renderMapStreetViewButton() {
    return(
      <div className="InfoButton" onClick={() => this.streetViewClicked()}>Street View</div>
    );

  }

  streetViewClicked(streetview,name,address){
    if(streetview!=''){
		   $('#street-view').css({'visibility':'visible'});
		   var streetview = streetview;
		   var streeviewOne = streetview.split('@')[1];
		   var streetviewTwo = streeviewOne.split(',');

		   $('.streetviewName').text(name);
		   $('.streetviewAddress').text(address);

		   setTimeout(function(){
		   	var panorama = new window.google.maps.StreetViewPanorama(
		    document.getElementById('street-view'),
		    {
		      position: {lat: parseFloat(streetviewTwo[0]), lng: parseFloat(streetviewTwo[1])},
		      pov: {heading: 165, pitch: 0},
		      zoom: 1,
					disableDefaultUI: true
		    });

			var currentZoomLevel = panorama.getZoom();

			$('#streetZoomIn').on('click', function(){
				if(currentZoomLevel != 21){
					panorama.setZoom(currentZoomLevel + 1);
				}

			});

			$('#streetZoomOut').on('click', function(){
				if(currentZoomLevel != 0){
					panorama.setZoom(currentZoomLevel - 1);
				}
			});
		   },1000);
		}
    $('.MapViewButton').on('click', function(){
			$('#street-view').css({'visibility':'hidden'});
		});
  }
  mapClicked(){
    this.setState({
     selectedPlace: {},
     activeMarker: {},
     showingInfoWindow: false
   });
   $(".ExploreAmenities").css("display","none");
  }
  handleMapZoom(action) {
    var currentZoomLevel = window.map.getZoom();

    if(action == "zoomIn") {
      window.map.setZoom(currentZoomLevel + 1);
    }
    else {
      if (currentZoomLevel >= 13) {
        window.map.setZoom(currentZoomLevel - 1);
      }
    }
  }
  amenitiesHover(itemID) {
    this.setState({
      amenityNameHovered: itemID
    });
    $(".mapAmenityListItem-"+itemID).addClass("bold");
  }
  amenitiesHoverExit(itemID){
    this.setState({
      amenityNameHovered: null
    });
    $(".mapAmenityListItem-"+itemID).removeClass("bold");
  }
  render() {
    // var maps = window.google.maps;
    // var initialCenter = new maps.LatLng(44.308049, -78.321456);
    let amenitiesHover = this.amenitiesHover.bind(this);
    let amenitiesHoverExit = this.amenitiesHoverExit.bind(this);


    return (
      <Map google={this.props.google}  zoom={13} onClick={() => this.mapClicked()}>
        {this.renderMarkers()}
        <MapSideBar
          onClick={(i) => this.handleSideBarClick(i)}
          categoryNames={this.state.categoryNames}
          activeCategories={this.state.activeCategories}
          amenitiesHover={amenitiesHover}
          amenitiesHoverExit={amenitiesHoverExit}
        />
         <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClick={() => this.InfoWindowClosed()}
            streetViewClicked={() => this.streetViewClicked(this.state.selectedPlace.StreetView,this.state.selectedPlace.Name,this.state.selectedPlace.Address1)}>
              <div>
                <div className="InfoContainer">{this.state.selectedPlace.Name}<br/>{this.state.selectedPlace.Address1}</div>
                    {this.renderMapInfoWindowMedia()}
                    {this.renderMapStreetViewButton()}
              </div>
          </InfoWindow>
          <div id="street-view">
            <div className="MapViewContainer">
              <p className="MapViewAddress"><span className="streetviewName"></span><br/><span className="streetviewAddress"></span></p>
              <p className="MapViewButton">Map View</p>
            </div>
            <span id="streetZoomIn" className="btn zoom in">
                <img src="images/map/plus.jpg" />
            </span>
            <span id="streetZoomOut" className="btn zoom out">
                <img src="images/map/minus.jpg" />
            </span>
          </div>
          <div className="ExploreAmenities">
            <img src="images/explore_amenities.png"/>
          </div>
          <span id="mapZoomIn" className="mapZoom" onClick={() => this.handleMapZoom("zoomIn")}>
            <img src="images/map/plus.jpg"/>
          </span>
          <span id="mapZoomOut" className="mapZoom" onClick={() => this.handleMapZoom("zoomOut")}>
            <img src="images/map/minus.jpg"/>
          </span>
      </Map>
    )
  }
}

export default GoogleApiComponent({
  apiKey: "AIzaSyCLFomDOPKqvvITt7tv_hZG0PDlWB2-q0g"
})(MapContainer)
