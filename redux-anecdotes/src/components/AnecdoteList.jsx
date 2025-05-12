import { useSelector, useDispatch } from 'react-redux'
import { addVoteTo } from '../reducers/anecdoteReducer'
import { notificationSet, notificationRemove } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
        if (state.filter === '') {
            return state.anecdotes
        }
        return state.anecdotes.filter(
          a => (a.content.toLowerCase().includes(state.filter) || a.content.includes(state.filter))
        )
    })
    const dispatch = useDispatch()

    const vote = async (anecdote) => {
        //console.log('vote', id)
        dispatch(addVoteTo(anecdote.id))
        dispatch(notificationSet(`you voted for '${anecdote.content}'`))
        setTimeout(() => dispatch(notificationRemove()), 5000)
    }

    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote)}>vote</button>
                </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList