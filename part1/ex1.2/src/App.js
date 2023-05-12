import React from 'react'

const Header = (props) =>
{
	return (
			<h1>{props.course}</h1>
	)
}

const Part = (props) =>
{
	return (
		<div>
			<p>{props.part} -- {props.exercises}</p>
		</div>
	)
}

const Content = (props) =>
{
	return (
		<div>
			<Part part = {props.parts[0].part} exercises = {props.parts[0].exercises}/>
			<Part part = {props.parts[1].part} exercises = {props.parts[1].exercises} />
			<Part part = {props.parts[2].part} exercises = {props.parts[2].exercises} />
		</div>
	)
}

const Total = (props) =>
{
  const result = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
	return (
		<div>
			<p>Number of exercises = {result}</p>
    </div>
	)
}


const App = () => {

  const course = {
        name: 'Half Stack application development',
        parts: [
        {
          part: 'Fundamentals of React',
          exercises: 10
        },
        {
          part: 'Using props to pass data',
          exercises: 7
        },
        {
          part: 'State of a component',
          exercises: 14
        }
        ]
}

	return (
	  <div>
		<Header course = {course.name}/>
		<Content parts = {course.parts}/>
		<Total  parts = {course.parts}/>
	  </div>
	)
  }

  export default App
