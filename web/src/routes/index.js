import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Dashboard from '~/pages/Dashboard';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';
import Students from '~/pages/Students';
import Plans from '~/pages/Plans';
import Enrollments from '~/pages/Enrollments';
import HelpOrders from '~/pages/HelpOrders';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route exact path="/students" component={Students} isPrivate />
      <Route exact path="/plans" component={Plans} isPrivate />
      <Route exact path="/enrollments" component={Enrollments} isPrivate />
      <Route path="/help-orders" component={HelpOrders} isPrivate />
    </Switch>
  );
}

export default Routes;
