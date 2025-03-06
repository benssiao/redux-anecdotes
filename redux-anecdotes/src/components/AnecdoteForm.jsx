import { useDispatch } from "react-redux";
import { useState } from "react";
import { backendCreateNew } from "../reducers/anecdoteReducer";

function AnecdoteForm() {
  const [newAnecdote, setNewAnecdote] = useState("");
  const dispatch = useDispatch();

  async function onClickAdd(e) {
    e.preventDefault();
    dispatch(backendCreateNew(newAnecdote));
    setNewAnecdote("");
  }

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
        <button onClick={onClickAdd}>create</button>
      </form>
    </>
  );
}

export default AnecdoteForm;
