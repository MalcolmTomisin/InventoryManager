import {
  ADD_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
  ADD_NAME,
  HYDRATE_STATE,
  HANDLE_NAME,
  HANDLE_DESCRIPTION,
  HANDLE_PRICE,
  HANDLE_STOCK,
} from '../types';

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

const hydrateState = (payload: object) => ({
  type: HYDRATE_STATE,
  payload,
});

const handleName = (payload: object) => ({
  type: HANDLE_NAME,
  payload,
});

const handlePrice = (payload: object) => ({
  type: HANDLE_PRICE,
  payload,
});

const handleDescription = (payload: object) => ({
  type: HANDLE_DESCRIPTION,
  payload,
});

const handleStock = (payload: object) => ({
  type: HANDLE_STOCK,
  payload,
});

export default {
  addItem,
  editItem,
  removeItem,
  addName,
  hydrateState,
  handleName,
  handlePrice,
  handleDescription,
  handleStock,
};
