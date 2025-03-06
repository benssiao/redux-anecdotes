import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

async function getAll() {
  const response = await axios.get(baseUrl);
  return response.data;
}

async function createNewAnecdote(anecdote) {
  const response = await axios.post(baseUrl, {
    content: anecdote,
    votes: 0,
  });
  return response.data;
}

async function updateAnecdote(id, updatedAnecdote) {
  const response = await axios.put(`${baseUrl}/${id}`, updatedAnecdote);
  return response;
}

export default { getAll, createNewAnecdote, updateAnecdote };
