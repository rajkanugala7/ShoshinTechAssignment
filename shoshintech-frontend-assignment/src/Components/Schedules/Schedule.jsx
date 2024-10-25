import Event from "./Event";

export default function Schedule({ events,pin}) {
    return (
        <div className="schedule">
            <div className="header">
                <span >Announcement</span>
            </div>
            {
                events.map((event, index) => (
                    <Event key={index} eventName={event.name} time={event.time} pin={pin} />
                ))
            }
        </div>
    );
}
