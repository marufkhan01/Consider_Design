import React, { Component } from 'react';
import firebase  from '../firebase.js';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount(){

        firebase.auth()
            .onAuthStateChanged((user) => {
                if(user){
                    console.log(user );
                    this.setState({user:user})
                }
                else{
                    this.setState({user:''})
                }
            })
    }

    SignIn(){
        console.log('this.state', this.state);
        const { username, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(username, password)
    }

    render(){
        return(
            <div className="main_section">
                <div className="row column text center">
                    <h1>
                        <div className="main_section_logo">
                            <img className="logo1" src={require("../image/logo.png")} alt=""/>
                            <h2 className="text">Consider design is a toll to get clients feedback.</h2>
                            <p className="text"> Makes your process fast.</p>
                        </div>
                    </h1>
                </div>
            <div className="form_inline">
                <h2> Sign in to design</h2>
                <div className="form_group">
                    <input
                        className="form_control"
                        type="text"
                        placeholder="username"
                        onChange={event => this.setState({username: event.target.value})}
                    />
                    <input
                        className="form_control"
                        type="password"
                        placeholder="password"
                        onChange={ event => this.setState({password: event.target.value})}
                    />
                    <button
                        className="from_control"
                        type="button"
                        onClick={() => this.SignIn()}
                    >
                        Login
                    </button>

                </div>

            </div>
            </div>
        );
    }
}
export default SignIn;