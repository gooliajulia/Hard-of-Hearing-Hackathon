import './BottomNav.css';
import { AiFillHome } from 'react-icons/ai';
import { RiEarthFill } from 'react-icons/ri';
import { FaSuitcase } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

export default function BottomNav() {
  return (
    <div className="bottom-nav">
      <div className="nav-home-container">
        <AiFillHome className="nav-icon"/>
        <h5>Home</h5>
      </div>
      <div className="nav-home-container">
        <RiEarthFill className="nav-icon"/>
        <h5>Discover</h5>
      </div>
      <div className="nav-home-container">
        <FaSuitcase className="nav-icon"/>
        <h5>My Trips</h5>
      </div>
      <div className="nav-home-container">
        <FaHeart className="nav-icon"/>
        <h5>Favorites</h5>
      </div>
    </div>
  )
}
