import { LOADING, LOADED } from "../types";

// cada reducer tiene su propio state
const initialState = {
  show: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        show: true
      };

    case LOADED:
      return {
        show: false
      };

    default:
      return state;
  }
}
