import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from '../../stylesheets/index.scss';
import { RouteTransition } from 'react-router-transition';
import EasyTransition from 'react-easy-transition';

export default class PageContent extends React.Component {

  componentDidUpdate(){
    console.log(this.props.children);
  }

  render() {
    return (
        <div className="col-xs-6 col-sm-6 page-content">
          <div>
          <EasyTransition
              path={location.pathname}
              initialStyle={{opacity: 0}}
              transition="opacity 0.1s ease-in"
              finalStyle={{opacity: 1}}
          >
            {this.props.children}
          </EasyTransition>
          </div>
        </div>
    )
  }
}
