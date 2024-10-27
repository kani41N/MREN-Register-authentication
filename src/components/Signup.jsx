import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';

function Signup() {
  // State to manage form inputs
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setMail('');
    setPassword('');
    axios.post('http://localhost:3001/register', {name, mail, password})
    .then(result => {console.log(result)
     navigate('/login')
    })
    .catch(err => console.log(err));
  };


  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ width: '30rem', maxWidth: '100%' }}>
        <div className="card-body">
          <h3 className="card-title text-center">Register</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Enter Name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="mail" className="form-label">Email</label>
              <input
                type="email"
                id="mail"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                className="form-control"
                placeholder="Enter Email"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type= {showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter Password"
                required
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="position-absolute end-0 translate-middle-y px-2"
                style={{ cursor: 'pointer', marginTop: '-20px'}}
                >
                {showPassword ? <RiEyeFill size={22} /> : <RiEyeOffFill size={22} /> }
              </span>
            </div>

            <button type="submit" className="btn btn-success w-100 " style={{marginTop: '8px'}}>
              Register
            </button>
          </form>
            <p className="text-center card-text">Already have an account</p>
            <Link to='/login' className="btn btn-light w-100">
              Login
            </Link>

        </div>
      </div>
    </div>
  );
}

export default Signup;
