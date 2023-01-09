
import './Settings_Menu.css'
import React, { Component } from 'react'

export default class Settings_Menu extends Component {


  componentDidMount() {
    if(document.getElementById("font1").checked) {
      console.log("this is checked");
    }

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
    

    let radioBtns = document.querySelectorAll("input[name='font']")
    
    let findSelected = () => {
      let selected = document.querySelector("input[name='font']:checked")

      document.getElementById("Notes-Field").style.fontFamily = `${selected} !important`
      document.getElementById("Notes-Field").style.backgroundColor = selected.value
    }

    radioBtns.forEach(radioBtn => {
      radioBtn.addEventListener("change", findSelected)
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
          <h4>Select font:</h4>
          <div id='select_font'>
            {/* <input type="radio" name='font' id='font1' value="'Courier New', Courier, monospace" />
            <input type="radio" name='font' id='font2' value="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif" />
            <input type="radio" name='font' id='font3' value="cursive" /> */}
            <input type="radio" name='font' id='font1' value="red" />
            <input type="radio" name='font' id='font2' value="blue" />
            <input type="radio" name='font' id='font3' value="green" />
          </div>
        </div>
      </div>
    )
  }
}
