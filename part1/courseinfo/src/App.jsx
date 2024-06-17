const Part = (props) => {
  return (
    <p>{props.title} {props.numOfExercises}</p>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part title={props.title1} numOfExercises={props.numOfExercises1} />
      <Part title={props.title2} numOfExercises={props.numOfExercises2} />
      <Part title={props.title3} numOfExercises={props.numOfExercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content title1={part1} title2={part2} title3={part3} numOfExercises1={exercises1} numOfExercises2={exercises2} numOfExercises3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App