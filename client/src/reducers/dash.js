import {
  SELECT_SLOT,
  SELECT_COMPANY,
  BOOK_SLOT,
  GET_SLOTS,
  LOGOUT
} from "../actions/types";

const initialState = {
  cid: null,
  slots: null
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
        slots: payload
      };
    case LOGOUT:
      return {
        ...state,
        // cid: null,
        slots: null
      };
    default:
      return state;
  }
}
