import {GlobalState, Action} from '../../types';
import {ADD_ITEM, EDIT_ITEM, DELETE_ITEM, ADD_NAME} from '../types';

const INITIAL_STATE: GlobalState = {
  inventory: [],
  setOfNames: new Set(),
};

const appReducer = (state: GlobalState = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {...state, ...action.payload};
    case EDIT_ITEM:
      return {...state, ...action.payload};
    case DELETE_ITEM:
      return {...state, ...action.payload};
    case ADD_NAME:
      return {...state, ...action.payload};
  }
};

export default appReducer;
