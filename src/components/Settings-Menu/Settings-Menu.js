
import './Settings_Menu.css'
import React, { Component } from 'react'

export default class Settings_Menu extends Component {


  componentDidMount() {
    let icon = document.getElementById("Menu-icon")
    let Menu = document.getElementById("Menu")
    let blackArea = document.getElementById("black-space")

    icon.style.fontSize = "26px"
    icon.style.cursor = "pointer"

    icon.addEventListener("click", () => {
      Menu.classList.add("visible-Menu")
      blackArea.classList.add("visible")
    })

    blackArea.addEventListener("click", () => {
      Menu.classList.remove("visible-Menu")
      blackArea.classList.remove("visible")
    })
    


  }

  render() {
    return (
      <div id='Settings-Menu'>
        <div className='Menu-Icon' id='Menu-icon'>
          <i className="fa-solid fa-gear"></i>
        </div>
        <div id='black-space'></div>
        <div id='Menu'>
          
        </div>
      </div>
    )
  }
}
