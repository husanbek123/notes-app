import React, { Component } from 'react'
import './Register.css'

export default class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userInfo: ""
        }

        if(localStorage.getItem("userInfo")) {
            this.state.userInfo = JSON.parse(localStorage.getItem("userInfo"))
        }
    }

    componentDidMount() {
        let form = document.querySelector("#reg-form")
        
        form.addEventListener("submit", (e)=> {
            e.preventDefault()

            let formData = new FormData(form)
            let formValues = Object.fromEntries(formData.entries())
            let storageUser = JSON.parse(localStorage.getItem("userInfo"))


            if(formValues.username === "" && formValues.password === "") {
                document.getElementById("failSpan").style.opacity = "1"
            }
            else {
                if(formValues.username === this.state.userInfo.username && formValues.password === this.state.userInfo.password) {
                    document.getElementById("register-Modal").style.display = "none"
                    window.location.href = "/home"
                }
                else if(this.state.userInfo === "") {
                    localStorage.setItem("userInfo", JSON.stringify(formValues))
                    window.location.href = "/home"

                }
                else if(formValues.username !== storageUser.username) {
                    localStorage.setItem("userInfo", JSON.stringify(formValues))
                }
                else if(formValues.username === storageUser.username && formValues.password !== storageUser.password) {
                    document.getElementById("failSpan").style.opacity = "1"
                }
                else {
                    console.log("else");
                    localStorage.setItem("userInfo", JSON.stringify(formValues))
                    window.location.href = "/home"
                }
            }

        })
    }

    

    render() {
        return (
            <div id='register-Modal'>
                <form id='reg-form'>
                    <span id='failSpan'>Ism yoki parolda hatolik bor!</span>
                    <input type="text" name='username' id='username' />
                    <input type="text" name='password' id='password' />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
