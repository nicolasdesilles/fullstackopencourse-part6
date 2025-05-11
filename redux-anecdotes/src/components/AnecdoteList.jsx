import { useSelector, useDispatch } from 'react-redux'
import { addVoteTo } from '../reducers/anecdoteReducer'

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

    const vote = (id) => {
        //console.log('vote', id)
        dispatch(addVoteTo(id))
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
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList