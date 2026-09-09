import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();

    return (
        <div className="container p-4">
            <div className="row text-center">

                <img
                    src="https://zerodha.com/static/images/landing.svg"
                    alt="hero image"
                    className="mb-5"
                />

                <h1 className="mt-5">Invest in everything</h1>

                <p>
                    Online platform to invest in stocks, derivatives, mutual funds,
                    ETFs, bonds, and more.
                </p>

                <button
                    style={{ width: "25%", margin: "0 auto" }}
                    type="button"
                    className="btn btn-primary p-3 mb-5"
                    onClick={() => navigate("/signup")}
                >
                    Sign up for free
                </button>

            </div>
        </div>
    );
}

export default Hero;