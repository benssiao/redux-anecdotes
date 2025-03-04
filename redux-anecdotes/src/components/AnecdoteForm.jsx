import { useDispatch } from "react-redux";
import { useState } from "react";
import { createNew } from "../reducers/anecdoteReducer";

function AnecdoteForm() {
  const [newAnecdote, setNewAnecdote] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <h2>create new</h2>
      <form>
        <div>
          <input
            value={newAnecdote}
            onChange={(e) => setNewAnecdote(e.target.value)}
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(createNew(newAnecdote));
            setNewAnecdote("");
          }}
        >
          create
        </button>
      </form>
    </>
  );
}

export default AnecdoteForm;
