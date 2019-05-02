import { State } from "./app.state";

const initialState: State = {
  count: 0,
  title: "super compteur"
};

export function reducer(state = initialState, action) {
  console.log("in reducer", action);
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + action.payload
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - action.payload
      };
    default:
      return state;
  }
}