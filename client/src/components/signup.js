import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            username: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const {value, name} = event.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        event.preventDefault();

        console.log('Form submitted', this.state);

        axios.post('http://localhost:9000/auth/signup', this.state).then( response => {
            console.log('Sign Up Response:', response);
        }).catch( err => {
            console.log('Sign Up Error:', err.message)
        })
    }

    render(){

        const { email, username, password } = this.state;

        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        Email:
                        <input name="email" value={email} type="text" onChange={this.handleChange}/>
                    </div>
                    <div>
                        Username:
                        <input name="username" value={username} type="text" onChange={this.handleChange}/>
                    </div>
                    <div>
                        Password:
                        <input name="password" value={password} type="text" onChange={this.handleChange}/>
                    </div>
                    <button>Create Account</button>
                </form>
            </div>
        )
    }
}

export default SignUp;
