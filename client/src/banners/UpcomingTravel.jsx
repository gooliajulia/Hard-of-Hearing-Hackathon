import './UpcomingTravel.css';

export default function UpcomingTravel() {
  return (
    <div>
        <h2>Upcoming Travel</h2>
        <div className="trips-container">
            {/* eventually read through trips and render here */}
            <div className="trip">
                <img src="./images/BostonLogan.jpeg" />
            </div>
            <div className="trip">
                <img src="./images/LAX.jpeg" />
            </div>
        </div>
    </div>
  )
}
