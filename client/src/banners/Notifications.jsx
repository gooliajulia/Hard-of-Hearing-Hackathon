import './Notifications.css'

export default function Notifications() {
  return (
    <div className="notifications">
      <h2>Notifications</h2>
      {/* eventually this will read and render notifications */}
      <div className="notification">
        <div className="head">
          <h4 className="subject green">Now Boarding</h4>
          <h5 className="when">Now</h5>
        </div>
        <div className="message">
          <p>Your flight to Miami is now boarding passengers in Group 2 at Gate 34</p>
        </div>
      </div>
      <div className="notification">
        <div className="head">
          <h4 className="subject red">Flight Delayed</h4>
          <h5 className="when">5 min ago</h5>
        </div>
        <div className="message">
          <p>Your 7:20 AM flight from Boston to Miami is delayed 20 minutes. Your flight is leave expected to leave at 7:40 AM.</p>
        </div>
      </div>
    </div>
  )
}
