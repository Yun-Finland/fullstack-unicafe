import { useState } from "react";
import React from 'react'

const StatisticLine = ({text, value }) => {
  return (    
    <tr>
      <td>{text}</td>
      <td> {value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const sum = good + neutral + bad;
  const avg = (sum===0 ? null : ((good*1 - bad*1)/sum).toFixed(2));
  const pos = (sum===0 ? null: <span> {(good*100/sum).toFixed(2)}% </span>);

  return (
    <div>
      <h1>statistics</h1>
      { sum===0
        ? <span>No feedback given</span>
        : <table>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={sum} />
            <StatisticLine text="average" value={avg} />
            <StatisticLine text="positive" value={pos} />
          </table>
      }
    </div>
  )
}

const Button = ({label, choice, setChoice}) => <button onClick={setChoice}>{label}</button>

const App = () => {
  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad ] = useState(0);
  
  const voteGood = () => setGood(good+1);
  const voteNeutral = () => setNeutral(neutral+1);
  const voteBad = () => setBad(bad+1);

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button label="good" setChoice={voteGood} />
      <Button label="neutral"  setChoice={voteNeutral} />
      <Button label="bad" setChoice={voteBad} />

      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  );
}

export default App;
