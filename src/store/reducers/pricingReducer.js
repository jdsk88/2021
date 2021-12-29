import {
  SET_ITEMS,
  GET_ITEMS,
  UPDATE_ITEMS,
  DELETE_ITEMS,
  CREATE_ITEM,
  CREATE_ITEM_DESC,
  GET_ITEMS_DESC,
  DELETE_ITEM_DESC,
  DELETE_ALL_ITEM_DESC,
} from "../actions.js";

export const initialState = { cards: [], descriptions: [] };

const pricingReducer = (state = initialState, action) => {
  console.log(state, action ? action : "NO ACTION YET");
  switch (action.type) {
    case SET_ITEMS:
      return { ...state, cards: [...state.cards, action.payload] };
    case GET_ITEMS:
      return { ...state, cards: [...state.cards] };
    case UPDATE_ITEMS:
      return;
    case CREATE_ITEM_DESC:
      return {
        ...state,
        descriptions: [...state.descriptions, action.payload],
      };
    case GET_ITEMS_DESC:
      return { ...state, descriptions: [...state.descriptions] };

    case DELETE_ITEM_DESC:
      state.descriptions.splice(
        state.descriptions.findIndex((desc) => desc.id === action.payload.id),
        1
      );

      return {
        ...state,
        descriptions: state.descriptions,
      };
    case DELETE_ALL_ITEM_DESC:
      state.descriptions = [];

      return {
        ...state,
        descriptions: state.descriptions,
      };

    case CREATE_ITEM:
      return;
    case DELETE_ITEMS:
      state.cards.splice(
        state.cards.findIndex((task) => task.id === action.payload.id),
        1
      );

      return {
        ...state,
        cards: state.cards,
      };
    default:
      return state;
  }
};

export default pricingReducer;
