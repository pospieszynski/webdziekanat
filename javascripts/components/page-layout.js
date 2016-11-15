import React from 'react';
import {Link} from 'react-router';
import PageContent from './page-content';

import styles from '../../stylesheets/index.scss';

export default class PageLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shouldHideNav: window.innerWidth < 767 ? "hideSideNav " : "showSideNav ",
      width: window.innerWidth,
      position: window.innerWidth < 767 ? "staticPos" : "fixedPos",
      showCloseIcon: ""
    }
  }

  hideSideNav() {
    if (this.state.width < 767) {
      this.setState({
        shouldHideNav: "hideSideNav ",
        showCloseIcon: ""
      });
    }
  }

  toggleSideNav() {
    this.setState({
      shouldHideNav: this.state.shouldHideNav === "hideSideNav " ? "showSideNav " : "hideSideNav ",
      showCloseIcon: this.state.shouldHideNav === "hideSideNav " ? "show-close-icon" : ""
    });
  }

  forceUpdate() {
    if (this.state.width < 767) {
      this.setState({shouldHideNav: "hideSideNav ", position: "staticPos", width: window.innerWidth});
    } else {
      this.setState({
        shouldHideNav: "showSideNav ",
        position: "fixedPos", width: window.innerWidth,
        showCloseIcon: ""
      })
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
              <div className={ "close-icon " + this.state.showCloseIcon } onClick={this.hideSideNav.bind(this)}></div>
              <img src={'../../img/pł-logo1.png'} className="img-responsive"/>
              <ul className={ "sidebar-nav " + this.state.shouldHideNav + this.state.position}>
                <li className="sidebar-nav__list-item">
                  <Link onClick={this.hideSideNav.bind(this)} className="feed-link" to="/profile/feed">
                    Feed
                  </Link>
                </li>
                <li>
                  <Link onClick={this.hideSideNav.bind(this)} className="managed-places-link" to="/profile/places/managed">
                    Managed Places
                  </Link>
                </li>
                <li>
                  <Link onClick={this.hideSideNav.bind(this)} className="followed-places-link" to="/profile/places/followed">
                    Followed Places
                  </Link>
                </li>
                <li>
                  <Link onClick={this.hideSideNav.bind(this)} className="register-place-link" to="/profile/places/register">
                    Register new Place
                  </Link>
                </li>
                <li>
                  <Link onClick={this.hideSideNav.bind(this)} className="settings-link" to="/profile/settings">
                    Profile Settings
                  </Link>
                </li>
              </ul>
            </div>
            <PageContent>{this.props.children}</PageContent>
            <div className="col-xs-12 col-sm-3">
              <div className="identity-info">
                <img src={'../../img/profile-pic.jpg'} className="profile-pic"/>
                <div className="info--colored">Wojciech Pośpieszyński</div>
                <div className="info">Computer Science</div>
                <div className="info--colored">195932</div>
              </div>

              <ul className={ "sidebar-nav " + this.state.shouldHideNav + this.state.position}>
                <li className="sidebar-nav__list-item">
                  <Link onClick={this.hideSideNav.bind(this)} className="feed-link" to="/profile/feed">
                    Feed
                  </Link>
                </li>
                <li>
                  <Link onClick={this.hideSideNav.bind(this)} className="managed-places-link" to="/profile/places/managed">
                    Managed Places
                  </Link>
                </li>
                <li>
                  <Link onClick={this.hideSideNav.bind(this)} className="followed-places-link" to="/profile/places/followed">
                    Followed Places
                  </Link>
                </li>
                <li>
                  <Link onClick={this.hideSideNav.bind(this)} className="register-place-link" to="/profile/places/register">
                    Register new Place
                  </Link>
                </li>
                <li>
                  <Link onClick={this.hideSideNav.bind(this)} className="settings-link" to="/profile/settings">
                    Profile Settings
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        </div>
    )
  }
}
