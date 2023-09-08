import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// setLoginstate 받아서 활용
const Login = ({setLoginstate }) => {
  // const navigate = useNavigate()

  // const loginState = () =>{
  //     navigate('/')}
    const navigate = useNavigate();

    const goToLogin = () => {
        setLoginstate(true);
        navigate("/");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={goToLogin}>click ME!</button>
    </div>
  );
};

export default Login;
