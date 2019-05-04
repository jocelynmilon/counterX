import { State } from "./app.state";
import { Detail } from "../models/detail";

const initialState: State = {
  count: 0,
  title: "super compteur",
  details: []
};

export function reducer(state = initialState, action) {
  console.log("in reducer", action);
  switch (action.type) {
    case "[Counter] Increment":
      return {
        ...state,
        count: state.count + action.payload,
        details: [
          ...state.details,
          <Detail>{ date: new Date(), buttonClicked: "ajout" }
        ]
      };
    case "[Counter], Decrement":
      return {
        ...state,
        count: state.count - action.payload,
        details: [
          ...state.details,
          <Detail>{ date: new Date(), buttonClicked: "retrait" }
        ]
      };
    default:
      return state;
  }
}
