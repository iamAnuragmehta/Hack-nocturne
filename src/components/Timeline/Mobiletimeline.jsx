import { timelineEvents } from "./timelineevent";
import "./mobile.css";

export default function Mobiletimeline() {
  return (
    <div className="timeline flex items-center">
      <div className="outer">
        {timelineEvents.map((event, index) => (
          <div key={index} className="card">
            <div className="timeline-dot" aria-hidden="true" />
            <div className="info timeline-content p-2 rounded-xl fade-animation">
              <div className="timeline-title">
                <div className="text-lg mr-4">{event.time}</div>
                <div className="text-lg text-purple-500">{event.title}</div>
              </div>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
