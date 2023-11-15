// Contact.js
import React from 'react';

const Contact = () => {
  const contactMethods = [
    { type: 'Email', address: 'info@example.com' },
    { type: 'Phone', number: '+1 (123) 456-7890' },
    { type: 'Address', location: '123 Main Street, Cityville, USA' },
  ];

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Contact Us</h2>
          <p className="card-text">
            Feel free to reach out to us. We are here to assist you.
          </p>

          <div className="row mt-4">
            {contactMethods.map((contact, index) => (
              <div key={index} className="col-md-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">{contact.type}</h5>
                    {contact.address && <p className="card-text">{contact.address}</p>}
                    {contact.number && <p className="card-text">{contact.number}</p>}
                    {contact.location && <p className="card-text">{contact.location}</p>}
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

export default Contact;
