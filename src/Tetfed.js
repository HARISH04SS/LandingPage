import React, { useState } from 'react';

export function Tetfed  () {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
  
    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!email) {
        setError('Email Address is required.');
      } else if (!validateEmail(email)) {
        setError('Email Address is not valid.');
      } else {
        setError('');
        console.log('Form submitted with email:', email);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input style={{width:'200px',paddingLeft:'400px',marginLeft:'200px',height:"40px"}}
            type="email"
            placeholder="Email Address"
            className={`form-control ${error ? 'is-invalid' : ''}`}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button style={{marginRight:"15px"}}  type="submit" className="btn btn-primary">Submit</button>
          {error && <div className="invalid-feedback small-error" style={{ fontSize: '0.8em', color: 'white' }}>{error}</div>}
        </div>
      </form>
    );
  };