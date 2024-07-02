//reducers
import { combineReducers } from 'redux';

const initialState = 0;

const count = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return state + action.inc;
  }

  return state;
};

const countReducer = combineReducers({ count });

export default countReducer;
