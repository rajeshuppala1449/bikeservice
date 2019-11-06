import {
  SELECT_SLOT,
  SELECT_COMPANY,
  BOOK_SLOT,
  GET_SLOTS,
  LOGOUT,
  LOAD_COMP
} from "../actions/types";

const initialState = {
  cid: null,
  slots: null,
  slotsLoaded: false,
  selected: null,
  comps: null,
  compLoaded: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SELECT_COMPANY:
      return {
        ...state,
        cid: payload
      };
    case GET_SLOTS:
      return {
        ...state,
        slots: payload,
        slotsLoaded: true
      };
    case BOOK_SLOT:
      return {
        ...state,
        slotsLoaded: false
      };
    case LOAD_COMP:
      return {
        ...state,
        comps: payload,
        compLoaded: true
      };
    case LOGOUT:
      return {
        ...state,
        cid: null,
        slotsLoaded: false
      };
    default:
      return state;
  }
}
