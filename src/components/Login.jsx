import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';

function Login() {

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMail('');
    setPassword('');
    axios.post('http://localhost:3001/login', {mail, password})
    .then(result => {console.log(result)
      navigate('/home')
      // if (result.data === 'Success') {
      //   navigate('/home')
      // }
    })
    .catch(err => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ width: '30rem', maxWidth: '100%' }}>
        <div className="card-body">
          <h3 className="card-title text-center">Login</h3>
          <form onSubmit={handleSubmit}>
            
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
                className="position-absolute top-50 mt-2 end-0 translate-middle-y px-2"
                style={{ cursor: 'pointer' }}
                >
                {showPassword ? <RiEyeFill size={22} /> : <RiEyeOffFill size={22} /> }
              </span>
            </div>

            <button type="submit" className="btn btn-success w-100 " style={{marginTop: '8px'}}>
              Login
            </button>
          </form>
            <p className="text-center card-text">Don't have an account?</p>
            <Link to='/signup' className="btn btn-light w-100">
              Signup
            </Link>

        </div>
      </div>
    </div>
  )
}

export default Login;