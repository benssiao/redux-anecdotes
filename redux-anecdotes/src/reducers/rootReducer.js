import anecdoteReducer from "./anecdoteReducer";
import filterReducer from "./filterReducer";
import { combineReducers } from "redux";

/*function rootReducer(
  state = {
    anecdotes: [],
    filterText: "",
  },
  action
) {
  return {
    anecdotes: anecdoteReducer(state.anecdotes, action),
    filters: filterReducer(state.filterText, action),
  };
}

export default rootReducer;
*/

const rootReducer = combineReducers({
  anecdotes: anecdoteReducer,
  filterText: filterReducer,
});

export default rootReducer;
