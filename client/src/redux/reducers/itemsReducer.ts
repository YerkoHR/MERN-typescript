import * as types from "../types/itemsTypes";

const initialState: types.Items = {
  items: [],
  loading: false
};

const itemsReducer = (
  state = initialState,
  action: types.itemsActionTypes
): types.Items => {
  switch (action.type) {
    case types.GET_ITEMS:
      return {
        ...state,
        items: action.items,
        loading: false
      };
    case types.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.item]
      };
    case types.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.id)
      };
    case types.LOADING_ITEMS:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default itemsReducer;
