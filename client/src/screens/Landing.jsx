import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import './Landing.css';

export default function Landing() {
    const navigate = useNavigate();

    useEffect(() => {
        // check for token in local storage
        console.log("check for token")
        // if token, navigate to home screen, if no, navigate to sign up
        setTimeout(() => {
            console.log("timeout")
            navigate('/sign-in')
        }, 1500);
    },[])

  return (
    <div className="landing">
        <Logo extraClass="animate" />
    </div>
  )
}
