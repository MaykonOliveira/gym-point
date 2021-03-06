import { combineReducers } from 'redux';

import auth from './auth';
import user from './user';
import students from './students';
import modals from './modals';
import plans from './plans';
import enrollments from './enrollments';
import helpOrders from './helpOrders';

export default combineReducers({
  auth,
  user,
  students,
  modals,
  plans,
  enrollments,
  orders: helpOrders,
});
