// Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Our Website!</h1>
        <p className="lead">Explore what we have to offer and discover amazing opportunities.</p>
        <hr className="my-4" />
        <p>Ready to get started? Sign in to access exclusive content.</p>

        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Explore Opportunities</h5>
                <p className="card-text">
                  Discover a world of exciting opportunities. Our platform opens doors to new experiences and possibilities.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Exclusive Content</h5>
                <p className="card-text">
                  Access exclusive content only available to our members. Stay updated with the latest insights and resources.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Community Engagement</h5>
                <p className="card-text">
                  Engage with a vibrant community of like-minded individuals. Share ideas, collaborate, and grow together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
