import React, { Component } from 'react'
import Note from './Note'

export default class Notes extends Component {

  constructor(props) {
    super(props)

    this.state = {
      notes: ""
    }

    if(localStorage.getItem("User-Notes")) {
      // this.setState({ notes: JSON.parse(localStorage.getItem("User-Notes"))  })
      this.state.notes = JSON.parse(localStorage.getItem("User-Notes"))
    }
    else {
      this.state.notes = []
    }

  }

  render() {
    return (
      <div id='Notes-Field'>
        {
          this.state.notes.map(item => {
            return <Note key={item.id} id={item.id} text={item.text} />
          })
        }
      </div>
    )
  }
}
