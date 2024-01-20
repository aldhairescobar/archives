import React, { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Button = ({onclick, text}) => {
  return (
    <button onClick={onclick}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad, total, average, positive}) => {

  if(total === 0){
    return <p>No feedback given</p> 
  }

  return (
    <>
    <table>
      <tbody>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={total}/>
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="positive" value={positive}/>
      </tbody>
    </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const total = good + neutral + bad
  const positive = `${(good/total)*100}%`
  const average = (good * 1 + neutral * 0 + bad * -1) / total

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)
  
  return (
    <>
      <h1>Give feedback</h1>
      <Button onclick={handleGood} text="good" />
      <Button onclick={handleNeutral} text="neutral" />
      <Button onclick={handleBad} text="bad" />
      <h2>Statistics</h2>
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={total} 
        positive={positive} 
        average={average} 
      />

    </>
  )
}


export default App