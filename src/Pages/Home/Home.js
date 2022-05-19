import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="hero min-h-screen max-w-7xl mx-auto" style={{backgroundImage:'url(https://i.ibb.co/Bn6QD3D/img-5.webp)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Todo Apps</h1>
            <p className="mb-5">welcome to my website.</p>
            <Link to={'/todo'}>
            <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Home;