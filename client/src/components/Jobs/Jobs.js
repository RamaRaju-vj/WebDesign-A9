// Jobs.js
import React from 'react';

const Jobs = () => {
  const jobListings = [
    { title: 'Frontend Developer', location: 'Cityville', requirements: 'React, JavaScript, HTML, CSS' },
    { title: 'Backend Developer', location: 'Techland', requirements: 'Node.js, Express, MongoDB' },
    { title: 'UI/UX Designer', location: 'Designville', requirements: 'UI/UX design skills, Adobe Creative Suite' },
  ];

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Job Opportunities</h2>
          <p className="card-text">Explore exciting job opportunities with us. Join our team and contribute to innovative projects.</p>

          <div className="row mt-4">
            {jobListings.map((job, index) => (
              <div key={index} className="col-md-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">{job.title}</h5>
                    <p className="card-text">Location: {job.location}</p>
                    <p className="card-text">Requirements: {job.requirements}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
