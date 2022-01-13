import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../redux/User';

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() =>
          dispatch(login({ name: 'syed1', email: 'syed@gmail.com', age: 20 }))
        }
      >
        Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Login;
