import { BUY_BOOK } from "./bookType";

const initialState = {
  numberOfBook: 10,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BOOK:
      return {
        ...state,
        numberOfBook: state.numberOfBook - action.payload,
      };
    default:
      return state;
  }
};
export default bookReducer;
