import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions';

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

        this.props.signup(this.state);
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
                    <button className="btn">Create Account</button>
                    <p className="red-text">{this.props.error}</p>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        error: state.user.error
    }
}

export default connect(mapStateToProps, { signup })(SignUp);