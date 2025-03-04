import { useSelector, useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import {
  reduxSetNotification,
  reduxRemoveNotification,
} from "../reducers/notificationReducer";

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
                    dispatch(vote(anecdote.id));
                    dispatch(
                      reduxSetNotification(`you voted '${anecdote.content}'`)
                    );
                    setTimeout(() => {
                      dispatch(reduxRemoveNotification());
                    }, 5000);
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
