import React from 'react'

const GrandChild = (props) => {
  return (
    <div style={{backgroundColor:"green"}}>
        <h2>GrandChild</h2>
        <p>{props.value}</p>
    </div>
  )
}

export default GrandChild