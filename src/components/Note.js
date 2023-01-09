
import React from 'react'

export default function Note(props) {
  return (
    <div key={props.id} className="note" id={props.id}>
        <h2>{props.id}</h2>
        <p>{props.text}</p>
    </div>
  )
}
