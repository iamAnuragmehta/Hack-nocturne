import "./TimeLine.css";
import {timelineEvents} from './timelineevent'

function TimelineSection() {
  

  const splitevents = timelineEvents.reduce(function (rows, key, index) {
    return (
      (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);

  return (
    <>
      <div className="timeline">
        {splitevents.map((event) => (
          <>
            {console.log(event[0])}
            <Firsttimeline
              time={event[0].time}
              title={event[0].title}
              description={event[0].description}
            />
            <Secondtimeline
              time={event[1].time}
              title={event[1].title}
              description={event[1].description}
            />
          </>
        ))}
      </div>
    </>
  );
}

const Firsttimeline = ({ time, title, description }) => {
  return (
    <>
      <div className="timeline-component timeline-content p-4 rounded-xl">
        <div className="text-lg mr-4">{time}</div>
        <div className="text-lg text-purple-500">{title}</div>
        <p>{description}</p>
      </div>

      <div className="timeline-middle">
        <div className="timeline-circle"></div>
      </div>

      <div className="timeline-empty"></div>
    </>
  );
};

const Secondtimeline = ({ time, title, description }) => {
  return (
    <>
      <div className="timeline-empty"></div>

      <div className="timeline-middle">
        <div className="timeline-circle"></div>
      </div>

      <div className="timeline-component timeline-content p-4 rounded-xl">
        <div className="text-lg mr-4">{time}</div>
        <div className="text-lg text-purple-500">{title}</div>
        <p>{description}</p>
      </div>
    </>
  );
};

export { TimelineSection };
