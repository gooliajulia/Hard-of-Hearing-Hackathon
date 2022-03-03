import Logo from '../components/Logo';
import './SignIn.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserLogin((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      }
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userLogin);
    navigate('/home');
  }

  return (
    <div className="sign-in">
        <Logo />
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="input-container">
                <label htmlFor="email">Email</label>
                <input required name="email" type="email" onChange={(e) => handleChange(e)}></input>
            </div>
            <div className="input-container">
                <label htmlFor="password">Password</label>
                <input required name="password" type="password" onChange={(e) => handleChange(e)}></input>
            </div>
            <div className="input-container">
              <a href="/forgot-password">Forgot Password?</a>
              <button className="single-wide" type="submit">Sign In</button>
            </div>
        </form>
        <h6>New user? Sign Up.</h6>
    </div>
  )
}
