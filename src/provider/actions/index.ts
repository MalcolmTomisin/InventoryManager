import {ADD_ITEM, EDIT_ITEM, DELETE_ITEM, ADD_NAME} from '../types';

const addItem = (payload: object) => ({
  type: ADD_ITEM,
  payload,
});

const editItem = (payload: object) => ({
  type: EDIT_ITEM,
  payload,
});

const removeItem = (payload: object) => ({
  type: DELETE_ITEM,
  payload,
});

const addName = (payload: object) => ({
  type: ADD_NAME,
  payload,
});

export default {
  addItem,
  editItem,
  removeItem,
  addName,
};
