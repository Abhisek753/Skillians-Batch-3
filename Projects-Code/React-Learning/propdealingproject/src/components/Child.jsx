import React from 'react'
import GrandChild from './GrandChild'

const Child = ({fruits,numberdata}) => {

  return (
    <div style={{backgroundColor:"teal",padding:"10px",marginBottom:"10px"}}>
        <h2>Child</h2>
        <p>{fruits}</p>
        <p>{numberdata}</p>
        <GrandChild value={40} />
    </div>
  )
}

export default Child