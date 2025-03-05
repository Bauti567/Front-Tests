import React from "react";
import { useNavigate, Route, Routes, Link, Outlet } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <Outlet />
      <h1>Dashboard del user</h1>
      <button onClick={handleClick}>logout</button>
      <Link to="welcome">Say welcome</Link>
    </div>
  );
}

export default Dashboard;
