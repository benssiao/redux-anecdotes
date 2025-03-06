import { useSelector, useDispatch } from "react-redux";
import { backendVote } from "../reducers/anecdoteReducer";
import { displayNotification } from "../reducers/notificationReducer";

function AnecdoteList() {
  const anecdotes = useSelector((state) => state.anecdotes);
  const filterText = useSelector((state) => state.filterText);
  const dispatch = useDispatch();

  return (
    <div>
      {anecdotes.map((anecdote) => {
        if (anecdote.content.includes(filterText)) {
          return (
            <div key={anecdote.id}>
              <div>{anecdote.content}</div>
              <div>
                has {anecdote.votes}
                <button
                  onClick={() => {
                    dispatch(backendVote(anecdote.id));
                    displayNotification(`you voted '${anecdote.content}'`);
                  }}
                >
                  vote
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default AnecdoteList;
