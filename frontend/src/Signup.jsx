import React, { Component } from 'react';
import './Signup.css'; // Import your CSS file

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            username: '',
            email: '',
            password: ''
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    }

    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.handleSubmit}>
                    <h1>Sign up</h1>
                    <div className="input">
                        <input
                            type="text"
                            placeholder="Full Name"
                            name="fullName"
                            value={this.state.fullName}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="input">
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="input">
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="input">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="light">Sign Up</button>
                    <p> Already have an account?
                        <a href="#">Login</a>
                    </p>
                </form>
            </div>
        );
    }
}

export default SignUpForm;
