import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { registerRequest } from '../api/auth';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const { register, handleSubmit } = useForm();
  const {signup, isAuthenticated} = useAuth();

  const navigate = useNavigate();

  useEffect(()=>{
    if(isAuthenticated) navigate('/tasks')
  },[isAuthenticated])
  // Registro de usuario 

  const OnSubmit = handleSubmit(async(values) => {
    
  })

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-sm p-4" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Register</h2>
        <form
          onSubmit={OnSubmit}
        >
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              className="form-control"
              {...register("username", { required: true })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="form-control"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="form-control"
              {...register("password", { required: true })}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
