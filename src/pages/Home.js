import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import InputField from '../components/InputField'
import Notes from '../components/Notes'



export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userInfo: "",
            count: 0
        }

        if(localStorage.getItem("userInfo")) {
            this.state.userInfo = JSON.parse(localStorage.getItem("userInfo"))
        }
    }

    render() {
        
        if(localStorage.getItem("userInfo")) {
            return (
                <>
                    <Navbar user={this.state.userInfo} />
                    <InputField notes={[]} />
                    <Notes />
                </>
            )
        }
        else {
            return (
                <>
                    <div id='not-found'>You need to register. <span id='span'>{this.state.count}</span> </div>
                    {
                        setTimeout(() => {
                            window.location.href = "/register"
                        }, 3000)
                    }
                </>
            )
        }
    }
}
