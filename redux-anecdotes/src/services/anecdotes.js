import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const get = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const createNew = async (content) => {
  const object = {
    content: content,
    votes: 0
  }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const update = async (anecdote) => {
  const newObject = {
    content: anecdote.content,
    votes: anecdote.votes
  }
  const response = await axios.put(`${baseUrl}/${anecdote.id}`, newObject)
  return response.data
}

export default { 
  getAll,
  get,
  createNew,
  update
}