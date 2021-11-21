import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Count from './Count';
import Intro from './Intro';
import Timer from '../lib/Timer';
import Address from './Address';
import Survey from './Survey';
// import './Body.scss';
import SnackBar from '../lib/SnackBar'
import TimeLine from '../lib/TimeLine'

class Body extends Component {
  render() {
    return (
      <>
        <Router>
          <Main />
          <Timer />
          <Routes>
            <Route path='/' component={TimeLine} />
            {/*<Route path='/survey' component={<Survey />} /> */}
          </Routes>
          <Survey />
        </Router>

      </>
    );
  }
}

export default Body;