import React from 'react';
import {Link} from 'react-router';
import PageContent from './page-content';

import styles from '../../stylesheets/index.scss';

export default class PageLayout extends React.Component {

  constructor(props){
    super(props);
    this.state = {shouldHideNav: window.innerWidth < 767 ? "hideSideNav " : "showSideNav ",
      width: window.innerWidth,
      position: window.innerWidth < 767 ? "staticPos" : "fixedPos"}
  }

  hideSideNav() {
    if(this.state.width < 767) {
      this.setState({shouldHideNav: "hideSideNav "});
    }
  }

  toggleSideNav(){
    this.setState({shouldHideNav: this.state.shouldHideNav === "hideSideNav " ?  "showSideNav " : "hideSideNav "});
  }

  forceUpdate() {
    if(this.state.width < 767) {
      this.setState({shouldHideNav: "hideSideNav ", position: "staticPos", width: window.innerWidth});
    }else {
      this.setState({shouldHideNav: "showSideNav ", position: "fixedPos", width: window.innerWidth})
    }
  }

  componentWillMount() {
    window.addEventListener('resize', () => this.forceUpdate());
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-3">
            <div className="ham-icon" onClick={this.toggleSideNav.bind(this)}></div>
            <div className="close-icon" onClick={this.toggleSideNav.bind(this)}></div>
            <ul className = { "sidebar-nav " + this.state.shouldHideNav + this.state.position} >
              <li><Link onClick={this.hideSideNav.bind(this)} to="/profile/feed">Feed</Link></li>
              <li><Link onClick={this.hideSideNav.bind(this)} to="/profile/places/managed">Managed Places</Link></li>
              <li><Link onClick={this.hideSideNav.bind(this)} to="/profile/places/followed">Followed Places</Link></li>
              <li><Link onClick={this.hideSideNav.bind(this)} to="/profile/places/register">Register new Place</Link></li>
              <li><Link onClick={this.hideSideNav.bind(this)} to="/profile/settings">Profile Settings</Link></li>
            </ul>
          </div>
          <PageContent>{this.props.children}</PageContent>
        </div>
      </div>
    )
  }
}
