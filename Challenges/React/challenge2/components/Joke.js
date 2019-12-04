import React from 'react'

function Joke(props) {
  return (
    <div>
      <h3 style={{display: !props.setup && 'none'}}>Question: {props.setup}</h3>
      <h3 style={{color: !props.setup && '#3C33FF'}}>Answer: {props.delivery}</h3>
      <hr />
    </div>
  )
}

export default Joke;
