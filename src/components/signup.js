import React, { Component } from 'react';
import firebase  from '../firebase.js';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            email: '',
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

    SignUp(){
        console.log('this.state', this.state);
        const { username, email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(username, email, password)
    }

    render(){
        console.log(this.props);
        return(
        <div className="signup_sketch">
            <h2>Welcome to free consider design</h2>
            <p>Enter your name and email address for free regitration.Thank you for using consider design.</p>
            <div className="signup_form">
                <input
                    className="form-control"
                    type="text"
                    placeholder="username"
                    onChange={event => this.setState({username: event.target.value})}
                /> <br/> <br/>
                <input
                    className="form-control"
                    type="text"
                    placeholder="email"
                    onChange={event => this.setState({email: event.target.value})}
                /> <br/> <br/>
                <input
                    className="form-control"
                    type="password"
                    placeholder="password"
                    onChange={ event => this.setState({password: event.target.value})}
                /> <br/> <br/>
                <button
                    className="form_control"
                    type="button"
                    onClick={() => this.SignUp()}
                    >
                    Create your free account
                </button>

            </div>

        </div>
        );
    }
}
export default SignUp;