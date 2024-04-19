import React, { Component } from 'react';
import './Signup.css'; 

class Signup extends Component {
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
        
    }

    render() {
        return (
            <div className="wrapper" style={{ backgroundImage: "url('/images/Signupimg.jpg')", backgroundSize:'cover', backgroundPosition:'center', height:'600px'}} >
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
                    <p style={{ marginTop: '10px' }}> 

                        <a href="#">Login</a>
                    </p>
                </form>
            </div>
        );
    }
}

export default Signup;
