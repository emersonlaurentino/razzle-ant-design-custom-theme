import { combineReducers } from 'redux';
import { handleAction, combineActions } from 'redux-actions';
import { flip, get, always } from 'lodash/fp';

import actions from './actions';

export default combineReducers({
  progress: handleAction(combineActions(
    actions.progress.incremented,
    actions.progress.decremented,
  ), {
    next: flip(get('payload')),
    throw: always(null),
  }, 60),

});
