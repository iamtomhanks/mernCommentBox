// import React { Component } from 'react';
// import Contact from './Contact';
// import Map from './Map';
// import Registration from './Registration';
// import Sliderbox from './Sliderbox';
import MainHome from './MainHome'
import HomeDetails from './HomeDetails'
// import Dropdown from './Dropdown';
import React from 'react'
import '../css/Carefree.css'
// import { Switch, Route } from 'react-router-dom'
export class App extends React.Component {

  render() {
    return (
      <div>
      <Switch>
        <Route exact path='/' component={MainHome}/>
        <Route path='/homedetails/:homeID' component={HomeDetails}/>
      </Switch>
      </div>
    );
  }


}

export default App;
