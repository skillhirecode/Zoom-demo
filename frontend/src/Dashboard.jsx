import React, { useState } from 'react';
import './Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
        date: '',
        allDay: false,
        start: '',
        end: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="layout">
            <header className="header">
                <a href="#0">
                    <i className="fa fa-bars"></i>
                    <div className="header-user"><i className="fas fa-user-circle icon"></i>Hello John Dee</div>
                </a>
            </header>
            <div className="sidebar">
                <ul>
                    {/* Sidebar content */}
                </ul>
            </div>
            <main className="content">
                <div className="main-header">
                    <div className="main-title">
                        <h1>New Event</h1>
                    </div>
                    <div className="main-form">
                        <form onSubmit={handleSubmit} name="event">
                            <input
                                type="text"
                                id="ftitle"
                                name="title"
                                placeholder="Add title"
                                value={formData.title}
                                onChange={handleChange}
                            />
                            {/* Add other form inputs similarly */}
                            <input type="submit" id="fsubmit" value="Save" className="button" />
                        </form>
                    </div>
                </div>
            </main>
            <footer className="footer">
                <div className="footer_sign">made with <span className="fas fa-heart"></span> by <a href="https://mafda.github.io/" target="_blank">mafda</a></div>
            </footer>
        </div>
    );
};

export default Dashboard;
