

import React, { Component } from 'react'

export default class InputField extends Component {

    constructor(props) {
        super(props)

        this.state = {
            notes: props.notes
            
        }

    }

    Add_Note() {

        let textOfNote = document.getElementById("input")
        let IdOfNote = document.getElementById("Id_input")
        let notes = this.state.notes


        if(textOfNote.value !== "" && IdOfNote.value !== "") {
            if(notes.every(item => item.id != IdOfNote.value)) {

                document.getElementById("Notes-Field").innerHTML = ""

                notes.push({
                    text: textOfNote.value,
                    id: IdOfNote.value
                })
        
                this.setState({ notes: notes })
                localStorage.setItem("User-Notes", JSON.stringify(this.state.notes))
    
                this.state.notes.map(item => {
                    document.getElementById("Notes-Field").innerHTML += `
                    <div class="note" id=${item.id}>
                        <h2>${item.id}</h2>
                        <p>${item.text}</p>
                    </div>`
        
                })
                textOfNote.value = ""
                IdOfNote.value = ""
            }
            else {
                console.log("Error");

            }
        }
        else {
            console.log("error");
        }
    }

    Delete_Note() {
        let textOfNote = document.getElementById("input")
        let IdOfNote = document.getElementById("Id_input")
        let notes = this.state.notes


        let cleanArr = notes.filter(note => note.id != IdOfNote.value)

        if(IdOfNote.value !== "") {
            let item = document.getElementById(IdOfNote.value)
            document.getElementById("Notes-Field").removeChild(item)
        }

        this.setState({ notes: cleanArr })


    }
    

    componentDidMount() {
        document.getElementById("NotesForm").addEventListener("submit", (e) => {
            e.preventDefault()

            return false
        })


        document.getElementById("Add_Btn").onclick = () => {
            this.Add_Note()
        }

        document.getElementById("Del_Btn").onclick = () => {
            this.Delete_Note()
        }
    }


    render() {

        

        return (
            <div id='Notes'>
                <form id='NotesForm'>
                    <div id='inputs'>
                        <textarea id='input' placeholder='Enter the text of your note' />
                        <input type="text" id='Id_input' placeholder='Enter the title or id of your note' />
                    </div>
                    <div className='btns'>
                        <button id='Add_Btn'>Add</button>
                        <button id='Del_Btn'>Delete</button>
                    </div>
                </form>
            </div>
        )
    }
}
