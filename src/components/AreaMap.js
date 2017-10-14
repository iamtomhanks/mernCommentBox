import React from 'react';
import '../css/AreaMap.css';
import MapContainer from './MapContainer';
import $ from "jquery";


export default class AreaMap extends React.Component {



  mapPdfClicked(pdf) {
    switch(pdf){
      case "visitors":
          window.open("https://s3.amazonaws.com/parkview.ca/AmenitiesMapImages/visitors.pdf");
          break;
      case "parks":
          window.open("https://s3.amazonaws.com/parkview.ca/AmenitiesMapImages/parks.pdf");
          break;
      case "recreation":
          window.open("https://s3.amazonaws.com/parkview.ca/AmenitiesMapImages/recreation.pdf");
          break;
      case "cycling":
          window.open("https://s3.amazonaws.com/parkview.ca/AmenitiesMapImages/cycling.pdf");
          break;
    }
  }


  render(){
    const area_mapbox_style = {
      overflow:'hidden',
      height: '800px',
      width: '80%',
      marginRight:'20%',
      position: 'relative'
    }
    return (
      <div className="row area_container">
        <div className="area_maptextbox">
          <h1 id="area_heading">AREA MAP</h1>
          <p id="pArea">
            Head out for some afternoon window shopping, have a bite on the patio, then take a sunset walk along the river before spending an evening with friends.
          </p>
        </div>
        <div style={area_mapbox_style} className="area_mapbox">

          <MapContainer/>

        </div>
        <div className="mapPdfContainer" onClick={() => this.mapPdfClicked("visitors")}>
          <div className="mapPdfDownload" >
            <span className="mapPdfLink">PDF DOWNLOAD</span>
            <span className="mapPdfDesc">Downtown Peterborough Visitor’s Guide</span>
          </div>
        </div>
        <div className="mapPdfContainer" onClick={() => this.mapPdfClicked("parks")}>
          <div className="mapPdfDownload" >
            <span className="mapPdfLink">PDF DOWNLOAD</span>
            <span className="mapPdfDesc">City of Peterborough Parks</span>
          </div>
        </div>
        <div className="mapPdfContainer" onClick={() => this.mapPdfClicked("recreation")}>
          <div className="mapPdfDownload" >
            <span className="mapPdfLink">PDF DOWNLOAD</span>
            <span className="mapPdfDesc">City of Peterborough Recreation Map</span>
          </div>
        </div>
        <div className="mapPdfContainer" onClick={() => this.mapPdfClicked("cycling")}>
          <div className="mapPdfDownload" >
            <span className="mapPdfLink">PDF DOWNLOAD</span>
            <span className="mapPdfDesc">Peterborough & the Kawarthas Cycling Routes</span>
          </div>
        </div>


      </div>
    )
  }

};
