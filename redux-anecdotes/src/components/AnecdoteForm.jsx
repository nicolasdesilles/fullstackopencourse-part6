import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificationSet, notificationRemove } from '../reducers/notificationReducer'
import anecdotesService from '../services/anecdotes'

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        const newAnecdote = await anecdotesService.createNew(content)
        dispatch(createAnecdote(newAnecdote))
        dispatch(notificationSet(`you added '${content}'`))
        setTimeout(() => dispatch(notificationRemove()), 5000)
    }

    return (
        <div>
            <h2>create new</h2>
                <form onSubmit={addAnecdote}>
                    <div><input name="anecdote"/></div>
                    <button type="submit">create</button>
                </form>
        </div>
    )

}

export default AnecdoteForm