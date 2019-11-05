import axios from "axios";
import {
  //SELECT_SLOT,
  SELECT_COMPANY,
  //BOOK_SLOT,
  GET_SLOTS,
  LOGOUT
} from "./types";
import { setAlert } from "./alert";
//import setAuthToken from "../utils/setAuthToken";

//select company
export const selComp = ({ id }) => async dispatch => {
  dispatch({
    type: SELECT_COMPANY,
    payload: id
  });

  dispatch(getSlots({ id }));
};

//get slots
export const getSlots = ({ id }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ id });

  try {
    const res = await axios.post("/book/getSlots", body, config);

    dispatch({
      type: GET_SLOTS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, "danger"));
      });
    }
  }
};

//remove slots
export const remSlots = () => dispatch => {
  dispatch({ type: LOGOUT });
};
