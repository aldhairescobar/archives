import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [points , setPoints] = useState(new Array(anecdotes.length).fill(0))

  let anecdoteMostVoted
  let largestNumber = 0
  let index
  for(let i = 0; i < points.length; i++){
    if(points[i] > largestNumber){
      largestNumber = points[i]
      index = i
      anecdoteMostVoted = anecdotes[index]
    }
  }

  console.log(points)
  console.log(index)
  console.log(largestNumber)

  const getRandomAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }

  const handleVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={getRandomAnecdote}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdoteMostVoted}</p>
    </div>
  )
}

export default App