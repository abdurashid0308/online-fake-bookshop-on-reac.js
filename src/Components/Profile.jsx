import React, { useState } from "react";
import "../Styles/profile.css";

function Profile() {
    const [activeTab, setActiveTab] = useState('signin');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        keepSignedIn: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="profile-main">
            <div className="auth-container">
                <div className="auth-tabs">
                    <button 
                        className={`tab-button ${activeTab === 'signin' ? 'active' : ''}`}
                        onClick={() => setActiveTab('signin')}
                    >
                        SIGN IN
                    </button>
                    <button 
                        className={`tab-button ${activeTab === 'signup' ? 'active' : ''}`}
                        onClick={() => setActiveTab('signup')}
                    >
                        SIGN UP
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="USERNAME"
                            value={formData.username}
                            onChange={(e) => setFormData({...formData, username: e.target.value})}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="PASSWORD"
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                        />
                    </div>

                    <div className="form-group checkbox">
                        <label>
                            <input
                                type="checkbox"
                                checked={formData.keepSignedIn}
                                onChange={(e) => setFormData({...formData, keepSignedIn: e.target.checked})}
                            />
                            <span>KEEP ME SIGN IN</span>
                        </label>
                    </div>

                    <button type="submit" className="submit-button">
                        SIGN IN
                    </button>

                    <a href="#" className="forgot-password">
                        FORGOT PASSWORD?
                    </a>
                </form>
            </div>
        </div>
    );
}

export default Profile;