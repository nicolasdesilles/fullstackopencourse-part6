import { QueryErrorResetBoundary, useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote } from '../requests'
import { useNotificationDispatch } from '../NotificationContext'

const AnecdoteForm = () => {

  const queryClient = useQueryClient()

  const notificationDispatch = useNotificationDispatch()

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote))
      notificationDispatch({
        type: 'SET',
        payload: `you added '${newAnecdote.content}'`
      })
      setTimeout(
        () => notificationDispatch({type: 'REMOVE'}),
        5000
      )
    },
    onError: (err) => {
      if (err.status === 400) {
        notificationDispatch({
          type: 'SET',
          payload: 'Error: the anecdote should be as least 5 characters long'
        })
        setTimeout(
          () => notificationDispatch({type: 'REMOVE'}),
          5000
        )
      }
    }

  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({
      content: content,
      votes: 0
    })
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
