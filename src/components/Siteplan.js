import React from 'react'
import '../css/Siteplan.css'
import $ from 'jquery'
import ReactDOM from 'react-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

    this.adjustSpPic();

    $(window).resize(function(){
      this.adjustSpPic();
    },this);

    var clicking = false;
    var previousX;
    var previousY;

    $(".spPic-container").mousedown(function(e) {
        e.preventDefault();
        previousX = e.clientX;
        previousY = e.clientY;
        clicking = true;
    });

    $(document).mouseup(function() {

        clicking = false;
    });

    $(".spPic-container").mousemove(function(e) {

        if (clicking) {
            e.preventDefault();
            var directionX = (previousX - e.clientX) > 0 ? 1 : -1;
            var directionY = (previousY - e.clientY) > 0 ? 1 : -1;
            //$("#scroll").scrollLeft($("#scroll").scrollLeft() + 10 * directionX);
            //$("#scroll").scrollTop($("#scroll").scrollTop() + 10 * directionY);
            $(".spPic-container").scrollLeft($(".spPic-container").scrollLeft() + (previousX - e.clientX));
            $(".spPic-container").scrollTop($(".spPic-container").scrollTop() + (previousY - e.clientY));
            previousX = e.clientX;
            previousY = e.clientY;
        }
    });



    $(".spPic-container").mouseleave(function(e) {
        clicking = false;
    });
  }
  adjustSpPic(){
    var viewportHeight = $(window).height();
    var optimalWidth = $(window).width();
    var optimalHeight = viewportHeight *.75;
    $(".spPic-container").css("height",optimalHeight + "px");
    // $(".spPic-container").css("width",optimalHeight + "px");
  }
  zoom(action){
    var width = $(".spPic").css("width");
    width = width.replace("px","");
    if(action == "in"){
      width = width * 1.05;
      $(".spPic").css("width",width + "px");
    }else {
      width = width * .95;
      $(".spPic").css("width",width + "px");
    }
  }

  render() {
    return (
    <div className='row siteplan_container' id="siteplan_container">
      <div className='siteplan_style'>
        <div className='siteHeading'>
          <h1 id='site1'>Site Plan</h1>
           <div className='row sitebtncontainer'>
             <button type="button"className="spbtn">
               <large>DOWNLOAD</large>
             </button>
            </div>
        </div>
        <div className="spPic-container">
          <img className="spPic" src="/images/breeze-sp.jpg"/>
          
        </div>
        <div className="spLegendContainer">
          <img className="spLegendPic" src="images/breeze-sp-legend-clear.png"/>
          <div className="spZoomBtnContainer">
            <div className="spZoomIn spZoomBtn" onClick={() => this.zoom("in")}>
              <img src="images/zoom-in.png"/>
            </div>
            <div className="spZoomOut spZoomBtn"  onClick={() => this.zoom("out")}>
              <img src="images/zoom-out.png"/>
            </div>
          </div>
        </div>

      </div>

    </div>

    )
  }

};
