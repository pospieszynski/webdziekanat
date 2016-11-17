import styles from '../stylesheets/index.scss';
import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Announcements from './components/announcements';
import Deadlines from './components/deadlines';
import Documents from './components/documents';
import Fees from './components/fees';
import ProfileSettings from './components/profile-settings';
import PageLayout from './components/page-layout';
import Status from './components/status';
import Programs from './components/programs';
import Grades from './components/grades';
import Schedules from './components/schedule';
import Enrolments from './components/enrolments';
import Courses from './components/courses';


export default class App extends React.Component {

  render() {
    return (

        <Router history={browserHistory}>
          <Route path="profile" component={PageLayout}>
            <IndexRoute component={Announcements} key={9}></IndexRoute>
            <Route path="announcements" component={Announcements} key={6}></Route>
            <Route path="programs" component={Programs} key={5}></Route>
            <Route path="deadlines" component={Deadlines} key={2}></Route>
            <Route path="documents" component={Documents} key={3}></Route>
            <Route path="fees" component={Fees} key={4}></Route>
            <Route path="status" component={Status}></Route>
            <Route path="settings" component={ProfileSettings} key={5}></Route>

            <Route path="grades" component={Grades} key={5}></Route>
            <Route path="schedule" component={Schedules} key={5}></Route>
            <Route path="enrolments" component={Enrolments} key={5}></Route>
            <Route path="courses" component={Courses} key={5}></Route>

          </Route>
        </Router>
    )
  }
}
