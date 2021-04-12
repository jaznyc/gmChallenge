import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';
import Entry from './Entry';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/form" component={Entry} />
      </Switch>
    );
  }
}

export default Routes;
