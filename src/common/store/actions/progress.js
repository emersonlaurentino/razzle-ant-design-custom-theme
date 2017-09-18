import { createAction } from 'redux-actions';

export const increment = createAction('INCREMENT');
export const incremented = createAction('INCREMENTED');
export const decrement = createAction('DECREMENT');
export const decremented = createAction('DECREMENTED');
