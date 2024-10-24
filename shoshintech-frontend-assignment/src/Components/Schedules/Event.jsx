export default function Event({ eventName ,time }) {
    return (
        <div className="eventcard">
            <div>
                <h3>{eventName}</h3>
                <span>{time }</span>
            </div>
            <div>
                <span>pin</span>
            </div>
        </div>
    )
}