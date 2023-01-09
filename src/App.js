import React, { Component } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Registration from './pages/Registration'
import Navbar from './components/Navbar'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userInfo: "",
            notes: [],
            mainPage: ""
        }


        if(localStorage.getItem("userInfo")) {
            this.state.userInfo = JSON.parse(localStorage.getItem("userInfo"))
        }
        if(localStorage.getItem("userNotes")) {
            this.state.notes = JSON.parse(localStorage.getItem("userNotes"))
        }

        if(localStorage.getItem("userInfo")) {
            this.state.mainPage = "/home"

        }
        else {
            this.state.mainPage = "/register"
        }
    }
    render() {
        return (
            <>
                <BrowserRouter basename='/notes'>
                    <Routes>
                        <Route exact path='/notes' element={<Home user={this.state.userInfo} />} />
                        <Route path='/register' element={<Registration />} />
                        <Route path='/home' element={<Home user={this.state.userInfo} />} />
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}
