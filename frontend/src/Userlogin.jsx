import React, { Component } from 'react';
import './Userlogin.css'; // Import your CSS file

class Userlogin extends Component {
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
        // Add your form submission logic here
    }

    render() {
        return (
            <div className="split-screen">
                <div className="left-half"></div>
                <div className="right-half">
                    <div className="wrapper">
                        <form onSubmit={this.handleSubmit}>
                            <h1> Userlogin</h1>
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
                </div>
            </div>
        );
    }
}

export default Userlogin;
