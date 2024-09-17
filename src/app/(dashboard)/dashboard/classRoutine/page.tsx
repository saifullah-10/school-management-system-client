import RoutinCard from "./RoutinCard";

const routins = [
  {
    day: "Monday",
    id: 1,
    classes: [
      { subject: "Data Structures and Algorithms", teacher: "ha kaihju" },
      {
        subject: "Operating Systems",
        teacher: "ha kaihju",
      },
      {
        subject: "Database Management Systems",
        teacher: "ha kaihju",
      },
      {
        subject: "Computer Networks",
        teacher: "ha kaihju",
      },
      {
        teacher: "ha kaihju",
        subject: "Software Engineering",
      },
      {
        subject: "Discrete Mathematics",
        teacher: "ha kaihju",
      },
    ],
  },
  {
    day: "Tuesday",
    id: 2,
    classes: [
      { subject: "Object-Oriented Programming", teacher: "ha kaihju" },
      {
        subject: "Theory of Computation",
        teacher: "ha kaihju",
      },
      {
        subject: "Compiler Design",
        teacher: "ha kaihju",
      },
      {
        subject: "Artificial Intelligence",
        teacher: "ha kaihju",
      },
      {
        teacher: "ha kaihju",
        subject: "Web Technologies",
      },
      {
        subject: "Human-Computer Interaction",
        teacher: "ha kaihju",
      },
    ],
  },
  {
    day: "Wednesday",
    id: 3,
    classes: [
      { subject: "Machine Learning", teacher: "ha kaihju" },
      {
        subject: "Cloud Computing",
        teacher: "ha kaihju",
      },
      {
        subject: "Mobile Application Development",
        teacher: "ha kaihju",
      },
      {
        subject: "Cybersecurity",
        teacher: "ha kaihju",
      },
      {
        teacher: "ha kaihju",
        subject: "Parallel Computing",
      },
      {
        subject: "Digital Logic Design",
        teacher: "ha kaihju",
      },
    ],
  },
  {
    day: "Thursday",
    id: 4,
    classes: [
      { subject: "Programming Languages", teacher: "ha kaihju" },
      {
        subject: "Network Security",
        teacher: "ha kaihju",
      },
      {
        subject: "Data Mining",
        teacher: "ha kaihju",
      },
      {
        subject: "Internet of Things (IoT)",
        teacher: "ha kaihju",
      },
      {
        teacher: "ha kaihju",
        subject: "Software Testing",
      },
      {
        subject: "Advanced Database Systems",
        teacher: "ha kaihju",
      },
    ],
  },
  {
    day: "Saturday",
    id: 5,
    classes: [
      { subject: "Big Data Analytics", teacher: "ha kaihju" },
      {
        subject: "Quantum Computing",
        teacher: "ha kaihju",
      },
      {
        subject: "Blockchain Technology",
        teacher: "ha kaihju",
      },
      {
        subject: "Computer Graphics",
        teacher: "ha kaihju",
      },
      {
        teacher: "ha kaihju",
        subject: "Natural Language Processing",
      },
      {
        subject: "Distributed Systems",
        teacher: "ha kaihju",
      },
    ],
  },
  {
    day: "Sunday",
    id: 6,
    classes: [
      { subject: "Software Project Management", teacher: "ha kaihju" },
      {
        subject: "Virtual Reality",
        teacher: "ha kaihju",
      },
      {
        subject: "Augmented Reality",
        teacher: "ha kaihju",
      },
      {
        subject: "Game Development",
        teacher: "ha kaihju",
      },
      {
        teacher: "ha kaihju",
        subject: "E-Commerce Technologies",
      },
      {
        subject: "Data Visualization",
        teacher: "ha kaihju",
      },
    ],
  },
];

const classNameRoutine = () => {
  return (
    <div className="container h-[30rem] mx-auto">
      <h1 className="text-2xl font-bold mb-4">CSE Department Class Routine</h1>
      <div className="overflow-x-auto   h-full w-full relative">
        <table className="  absolute top-0 left-0 border border-gray-300">
          {/* <!-- Header with className times --> */}
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-2 px-4 border border-gray-300">Day</th>
              <th className="py-2 px-4 border border-gray-300">9:00 - 10:00</th>
              <th className="py-2 px-4 border border-gray-300">
                10:00 - 11:00
              </th>
              <th className="py-2 px-4 border border-gray-300">
                11:00 - 12:00
              </th>
              <th className="py-2 px-4 border border-gray-300">12:00 - 1:00</th>
              <th className="py-2 px-4 border border-gray-300">1:00 - 2:00</th>
              <th className="py-2 px-4 border border-gray-300">2:00 - 3:00</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- Monday --> */}
            {routins.map((day) => (
              <>
                <tr key={`${day.id}-clsroutine`}>
                  <td className="py-2 px-4 border border-gray-300 bg-gray-200">
                    {day.day}
                  </td>
                  {day.classes.map((singleclass, ind) => (
                    <>
                      <td
                        key={`${day.id}-${ind}`}
                        className="py-2 px-4 border border-gray-300"
                      >
                        <RoutinCard card={singleclass} />
                      </td>
                    </>
                  ))}
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default classNameRoutine;
