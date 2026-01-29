import React from 'react'

// Header: displays course name
const Header = ({ name }) => <h2>{name}</h2>

// Part: displays a single part
const Part = ({ part }) => (
  <div className="part">
    {part.name} {part.exercises}
  </div>
)

// Content: lists parts
const Content = ({ parts }) => (
  <div className="parts">
    {parts.map(p => (
      <Part key={p.id} part={p} />
    ))}
  </div>
)

// Total: sums exercises using reduce
const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <p><strong>Total of exercises:</strong> {total}</p>
  )
}

// Course: composes the above components for a single course
const Course = ({ course }) => {
  return (
    <div className="course">
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course
