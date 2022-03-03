import './SuggestedPlaces.css';

export default function SuggestedPlaces() {
  return (
    <div>
        <h2>Discover Places where you can use Weid...</h2>
        <div className="places-container">
            {/* eventually read through places and render */}
            <div className="place">
                <img src="./images/BostonT.jpeg" />
                <div className="info">
                    <div className="info-head">
                        <h4>Boston MBTA</h4>
                        <h5>Subway & Commuter Rail</h5>
                    </div>
                    <h6>more details</h6>
                </div>
            </div>
        </div>
    </div>
  )
}
