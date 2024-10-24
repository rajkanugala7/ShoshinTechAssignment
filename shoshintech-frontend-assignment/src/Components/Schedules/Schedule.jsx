import Event from "./Event";

export default function Schedule({ events }) {
    return (
        <div className="schedule">
            <div className="header">
                <h1>Announcement</h1>
            </div>
            {
                events.map((event, index) => (
                    <Event key={index} eventName={event.name} time={event.time} />
                ))
            }
        </div>
    );
}
