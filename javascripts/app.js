import styles from '../stylesheets/index.scss';
import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import FeedBoard from './components/feed-board';
import ManagedPlaces from './components/managed-places';
import FollowedPlaces from './components/followed-places';
import PlaceRegistration from './components/place-registration';
import ProfileSettings from './components/profile-settings';
import PageLayout from './components/page-layout';

export default class App extends React.Component {

  render() {
    return (

        <Router history={browserHistory}>
          <Route path="profile" component={PageLayout}>
            <IndexRoute component={FeedBoard}></IndexRoute>
            <Route path="feed" component={FeedBoard}></Route>
            <Route path="settings" component={ProfileSettings}></Route>
            <Route path="places">
              <IndexRoute component={ManagedPlaces}></IndexRoute>
              <Route path="managed" component={ManagedPlaces}></Route>
              <Route path="followed" component={FollowedPlaces}></Route>
              <Route path="register" component={PlaceRegistration}></Route>
            </Route>
          </Route>
        </Router>
    )
  }
}
