import Notifications from '../banners/Notifications';
import SuggestedPlaces from '../banners/SuggestedPlaces';
import UpcomingTravel from '../banners/UpcomingTravel';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <Notifications />
      <UpcomingTravel />
      <SuggestedPlaces />
    </div>
  )
}
