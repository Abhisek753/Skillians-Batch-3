import React from 'react'
import "../App.css"
const Card = (props) => {
    console.log(props.data.title)
  return (
    <div className='card-container' >
      <div className='top-container'>
          <div>
            <img src={props.data.imgurl} alt='user-img'/>
          </div>
          <div className='details'> 
            <span>Name : {props.data.title}</span>
            <span>Age : {props.data.age}</span>
            <span>Number : {props.data.number}</span>
          </div>
      </div>
      <div style={{color:`${props.color}`}}>
        {props.data.desc}
      </div>
    </div>
  )
}

export default Card