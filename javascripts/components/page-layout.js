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
            <div className="col-xs-12 col-sm-3 left-sector">
              <div className="ham-icon" onClick={this.toggleSideNav.bind(this)}></div>
              <div className={ "close-icon " + this.state.showCloseIcon } onClick={this.hideSideNav.bind(this)}></div>
              <a href="#">
                <img src={'../../img/pł-logo1.png'} className="img-responsive"/>
              </a>
              <ul className={ "sidebar-nav " + this.state.shouldHideNav + this.state.position}>
                <li className="sidebar-nav__list-item">
                  <Link onClick={this.hideSideNav.bind(this)} className="feed-link" to="/profile/announcements">
                    <span>Announcements</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={this.hideSideNav.bind(this)} className="deadlines-link" to="/profile/deadlines">
                    <span>Deadlines</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={this.hideSideNav.bind(this)} className="documents-link" to="/profile/documents">
                    <span>Documents</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={this.hideSideNav.bind(this)} className="fees-link" to="/profile/fees">
                    <span>Fees</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={this.hideSideNav.bind(this)} className="programs-link" to="/profile/programs">
                    <span>Programs</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={this.hideSideNav.bind(this)} className="status-link" to="/profile/status">
                    <span>Status</span>
                  </Link>
                </li>
              </ul>
            </div>

              <PageContent>{this.props.children}</PageContent>

            <div className="col-xs-12 col-sm-3 right-sector">
              <div className="identity-info">
                <a href="#">
                  <img src={'../../img/profile-pic.jpg'} className="profile-pic"/>
                </a>
                <div className="info--colored"><strong>Wojciech Pośpieszyński</strong></div>
                <div className="info">Computer Science</div>
                <div className="info--colored">195932</div>
              </div>

              <ul className={ "sidebar-nav sidebar-nav--pull-right " + this.state.shouldHideNav}>
                <li className="sidebar-nav__list-item">
                  <Link onClick={this.hideSideNav.bind(this)} className="grades-link" to="/profile/grades">
                    <span>Grades</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={this.hideSideNav.bind(this)} className="courses-link" to="/profile/courses">
                   <span>Courses</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={this.hideSideNav.bind(this)} className="enrolment-link" to="/profile/enrolments">
                    <span>Enrolments</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={this.hideSideNav.bind(this)} className="schedule-link" to="/profile/schedule">
                    <span>Schedule</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={this.hideSideNav.bind(this)} className="settings-link" to="/profile/settings">
                    <span>Settings</span>
                  </Link>
                </li>

                <li className="logout-link">
                  <Link onClick={this.hideSideNav.bind(this)}  to="#">
                    <span>Log out</span>
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        </div>
    )
  }
}
