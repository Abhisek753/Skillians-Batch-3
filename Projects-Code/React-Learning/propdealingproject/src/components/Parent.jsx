import React from 'react'
import Child from './Child'

const Parent = () => {
  var  fruits=["Apple","Orange","Jackfruit","Grapes"]
  var numbers=[1,2,3,4,5,6,7,8]
  return (
    <div style={{backgroundColor:"blue",padding:"10px"}}>
        <h2>Parent</h2>
        <Child fruits={fruits}/>
        <Child numberdata={numbers}/>
        <Child fruits={fruits}/>
    </div>
  )
}

export default Parent