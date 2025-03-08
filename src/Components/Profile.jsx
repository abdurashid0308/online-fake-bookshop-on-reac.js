import React, { useState } from "react";
import "../Styles/profile.css";

function Profile() {
    const [activeTab, setActiveTab] = useState('signin');

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

                {activeTab === 'signin' ? (
                    // Sign In Form
                    <form className="auth-form">
                        <div className="form-group">
                            <input type="text" placeholder="USERNAME" />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="PASSWORD" />
                        </div>
                        <div className="form-group checkbox">
                            <label>
                                <input type="checkbox" />
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
                ) : (
                    // Sign Up Form
                    <form className="auth-form">
                        <div className="form-group">
                            <input type="text" placeholder="FULL NAME" />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="EMAIL" />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="USERNAME" />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="PASSWORD" />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="CONFIRM PASSWORD" />
                        </div>
                        <button type="submit" className="submit-button">
                            SIGN UP
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Profile;