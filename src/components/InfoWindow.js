import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import $ from "jquery";

export class InfoWindow extends React.Component {

  componentDidMount() {
    this.renderInfoWindow();

  }

  componentDidUpdate(prevProps) {

    const {google, map} = this.props;

    if (!google || !map) {
      return;
    }

    if (map !== prevProps.map) {
      this.renderInfoWindow();
    }

    if (this.props.position !== prevProps.position) {
      this.updatePosition();
    }

    if (this.props.children !== prevProps.children) {
      this.updateContent();
    }

    if ((this.props.visible !== prevProps.visible ||
        this.props.marker !== prevProps.marker ||
        this.props.position !== prevProps.position)) {
        this.props.visible ?
          this.openWindow() :
          this.closeWindow();
    }
  }

  renderInfoWindow() {
    let {map, google, mapCenter} = this.props;

    if (!google || !google.maps) {
      return;
    }

    const iw = this.infowindow = new google.maps.InfoWindow({
      content: '',
      maxWidth: 350
    });

    google.maps.event
      .addListener(iw, 'closeclick', this.props.onClick)
    google.maps.event
      .addListener(iw, 'domready', this.onOpen.bind(this));
  }

  onOpen() {
    if (this.props.onOpen) {
      this.props.onOpen();
    }
    var props_2 = this.props;
    $('.InfoButton').on("click",function(){
      props_2.streetViewClicked();
    });
  }

  onClose() {
    if (this.props.onClose) {
      this.props.onClose();
    }

  }

  openWindow() {
    this.infowindow.open(this.props.map, this.props.marker);

  }

  updatePosition() {
    let pos = this.props.position;
    if (!(pos instanceof window.google.maps.LatLng)) {
      pos = pos && new window.google.maps.LatLng(pos.lat, pos.lng);
    }
  }

  updateContent() {
    const content = this.renderChildren();
    this.infowindow.setContent(content);

  }

  closeWindow() {
    this.infowindow.close();
  }

  renderChildren() {
    const {children} = this.props;
    return ReactDOMServer.renderToString(children);
  }

  render() {
    return null;
  }
}

InfoWindow.propTypes = {
  children: PropTypes.element.isRequired,
  map: PropTypes.object,
  marker: PropTypes.object,
  position: PropTypes.object,
  visible: PropTypes.bool,

  // callbacks
  onClose: PropTypes.func,
  onOpen: PropTypes.func
}

InfoWindow.defaultProps = {
  visible: false
}

export default InfoWindow
