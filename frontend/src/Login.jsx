import React, { Component } from 'react';
import './Login.css'; // Import your CSS file

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
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
            <div className="wrapper" style={{ backgroundImage: "url('/images/loginimg.jpg')", backgroundSize:'cover', backgroundPosition:'center', height:'400px',gap:'30px' }}>
                <form onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
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
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="light">Login</button>
                    <p style={{ marginTop: '10px' }}> 

                        <a href="#">Sign Up</a>
                    </p>
                </form>
            </div>
        );
    }
}

export default Login;
