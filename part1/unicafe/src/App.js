import React, { useState } from 'react'

const Display = ({ text, value }) => (
	<tr>
		<td style={{ width: '100px' }}>{text}</td>
		<td style={{ textAlign: 'left' }}>{value}</td>
	</tr>
)

const Button = ({handleClick, text}) => (
	<button onClick={handleClick}>
		{text}
	</button>
)

const StatisticsLine = ({text, value}) => {
	return (
		<Display text={text} value={value}/>
	)
}

const Statistics = ({good, neutral, bad}) => {

	const total = good + neutral + bad;

	const lines =[
	{ text: 'good', value: good },
	{ text: 'neutral', value: neutral },
	{ text: 'bad', value: bad },
	{ text: 'all', value: good + neutral + bad },
	{ text: 'average', value: ((good + neutral + bad) / 3).toFixed(2) },
	{ text: 'percentage', value: ((good / (good + neutral + bad)) * 100).toFixed(2) + '%' },
	]

	if (total === 0) {
		return (
			<p><font size="4"> Waiting for feedback</font></p>
		)
	}
	else
	{
		return (
		<>
			{lines.map((line, index) => (
				<StatisticsLine key={index} text={line.text} value={line.value} />
		  ))}
		</>
		)
	}
}

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<p>
				<b><font size="6"> Give Feedback </font></b>
			</p>
				<Button handleClick={() => setGood(good + 1)} text='good'/>
				<Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
				<Button handleClick={() => setBad(bad + 1)} text='bad'/>
			<div>
				<p>
					<b><font size="6"> Statistics </font></b>
				</p>
					<Statistics good={good} neutral={neutral} bad={bad}/>
			</div>
		</div>
	)
}

export default App;
