import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import anecdotesService from './services/anecdotes'
import { setAnecdotes } from './reducers/anecdoteReducer'

import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {

  const dispatch = useDispatch()
  
  useEffect(() => {
    anecdotesService.getAll().then(anecdotes => 
      dispatch(setAnecdotes(anecdotes))
    )
  })

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App