import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

function Hompage() {
    const featureEvents = getFeaturedEvents();
    return (
        <div>
            <h1>homepage</h1>
            <EventList items={featureEvents} />
        </div>
    );
}

export default Hompage;
