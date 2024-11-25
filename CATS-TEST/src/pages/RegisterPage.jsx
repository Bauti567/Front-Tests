import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) navigate("/cat");
  }, [isAuthenticated]);

  const OnSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-sm p-4" style={{ width: "400px" }}>
        {Array.isArray(RegisterErrors) &&
          RegisterErrors.map((error, i) => (
            <div key={i} className="bg-danger text-white p-2 mb-2">
              {error}
            </div>
          ))}

        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={OnSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              className="form-control"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <p className="text-danger mt-2">Username is required</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="form-control"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-danger mt-2">Email is required</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="form-control"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-danger mt-2">Password is required</p>
            )}
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
