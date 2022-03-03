import './Notifications.css'

export default function Notifications() {
  return (
    <div className="notifications">
      <h2>Notifications</h2>
      {/* eventually this will read and render notifications */}
      <div className="notification">
        <div className="head">
          <h4 className="subject">Flight Delayed</h4>
          <h5 className="when">Now</h5>
        </div>
        <div className="message">
          <p>Your 7:20 AM flight from Boston to Miami is delayed 20 minutes. Your flight is leave expected to leave at 7:40 AM.</p>
        </div>
      </div>
    </div>
  )
}
