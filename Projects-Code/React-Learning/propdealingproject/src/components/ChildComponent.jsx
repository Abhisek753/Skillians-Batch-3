import React from 'react'

const ChildComponent = (props) => {

    console.log("Child component data coming from parent component",props.data)
  return (
    <div style={{border:"2px solid black"}}>
        <h2>Child Component</h2>
        <p>{props.firstname}-{props.lastname}</p>
    </div>
  )
}

export default ChildComponent