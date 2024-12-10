import React from "react";
import "./TimeLine.css";

function TimelineSection() {
  const timelineEvents = [
    {
      time: "8:00 AM",
      title: "Registration & Team Set-Up",
      description:
        "Participants arrive, register, and form teams. Get ready to meet your potential collaborators and prepare for an exciting hackathon journey.",
      side: "left",
    },
    {
      time: "9:00 AM",
      title: "Welcome & Opening Remarks",
      description:
        "Official welcome by organizers, introduction to the hackathon theme, rules, and expectations. Get inspired and motivated!",
      side: "right",
    },
    {
      time: "10:00 AM",
      title: "Hackathon Kickoff",
      description:
        "Coding begins! Teams start brainstorming, planning, and developing their innovative projects.",
      side: "left",
    },
    {
      time: "1:00 PM",
      title: "Lunch Break",
      description:
        "Refuel and recharge. Network with fellow participants and take a short mental break.",
      side: "right",
    },
    {
      time: "4:00 PM",
      title: "Midpoint Check-In",
      description:
        "Mentors and organizers provide guidance and support. Teams can seek advice and overcome challenges.",
      side: "left",
    },
    {
      time: "7:00 PM",
      title: "Project Submission",
      description:
        "Final submissions are due. Teams finalize their projects and prepare for presentations.",
      side: "right",
    },
    {
      time: "8:00 PM",
      title: "Closing & Finalists Revealed",
      description:
        "Top projects are selected by judges. Anticipation builds for the final announcements.",
      side: "left",
    },
    {
      time: "9:00 PM",
      title: "Winners Announcement",
      description:
        "Celebrate the most innovative and impactful projects. Recognition and prizes await!",
      side: "right",
    },
  ];

  const splitevents = timelineEvents.reduce(function (rows, key, index) {
    return (
      (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);

  return (
    <section className="flex flex-col text-white mb-12 font-robox">
      <div className="mb-4 text-3xl text-center md:text-6xl font-bold text-purple-500">
        Timeline
      </div>

      <div className="timeline">
        {splitevents.map((event, index) => (
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
    </section>
  );
}

const Firsttimeline = ({ time, title, description }) => {
  return (
    <>
      <div className="timeline-component timeline-content">
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

      <div className="timeline-component timeline-content">
        <div className="text-lg mr-4">{time}</div>
        <div className="text-lg text-purple-500">{title}</div>
        <p>{description}</p>
      </div>
    </>
  );
};

export { TimelineSection };
