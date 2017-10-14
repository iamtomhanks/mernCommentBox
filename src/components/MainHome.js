import React from 'react'
import Nav from './Nav';
import Header from './Header';
import Contact from './Contact';
import SiteMap from './SiteMap';
import Sidebar from './Sidebar';
import Upgrades from './Upgrades';
import Carefree from './Carefree';
import Trails from './Trails';
import AreaMap from './AreaMap';
import Siteplan from './Siteplan';
import Features from './Features';
import HomeDetails from './HomeDetails';
import Homes from './Homes';

export class MainHome extends React.Component {

  render() {
    return (
      <div>
        <Nav/>
        <Header />
        <Contact/>
        <Upgrades/>
        <SiteMap/>
        <Carefree/>
        <Trails/>
        <AreaMap/>
        <Homes history={this.props.history}/>
        <Siteplan/>
        <Features/>
      </div>

    );
  }


}

export default MainHome;
