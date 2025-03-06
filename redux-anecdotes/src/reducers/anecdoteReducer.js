import { createSlice } from "@reduxjs/toolkit";
import anecdotesService from "../../services/anecdotes";

const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const initialState = anecdotesAtStart.map(asObject);

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState,
  reducers: {
    vote(state, actions) {
      state.find(
        (anecdoteObject) => anecdoteObject.id === actions.payload
      ).votes += 1;
      state.sort((a, b) => -(a.votes - b.votes));
    },

    createNew(state, actions) {
      state.push(actions.payload);
    },

    setAnecdotes(state, actions) {
      return actions.payload;
    },
  },
});

export const backendCreateNew = (anecdote) => {
  return async (dispatch, getState) => {
    const response = await anecdotesService.createNewAnecdote(anecdote);
    dispatch(createNew(response));
  };
};
export const backendGetAnecdotes = () => {
  return async (dispatch, getState) => {
    const response = await anecdotesService.getAll();
    dispatch(setAnecdotes(response));
  };
};

export const backendVote = (id) => {
  return async (dispatch, getState) => {
    const fullState = getState();
    const anecdoteToUpdate = fullState.anecdotes.find((a) => a.id == id);
    await anecdotesService.updateAnecdote(id, {
      ...anecdoteToUpdate,
      votes: anecdoteToUpdate.votes + 1,
    });
    dispatch(vote(id));
  };
};

export const { vote, createNew, setAnecdotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
