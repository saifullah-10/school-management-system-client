import RoutinCard from "./RoutinCard";

const routins = [
  {
    day: "Monday",
    id: 1,
  classes: [
    {first: {subject: "subject", room: "A23", teacher: "jon due"}},
    {second: {subject: "subject", room: "A23", teacher: "jon due"}},
    {third: {subject: "subject", room: "A23", teacher: "jon due"}},
    {fourth: {subject: "subject", room: "A23", teacher: "jon due"}},
    {five: {subject: "subject", room: "A23", teacher: "jon due"}},
    {six: {subject: "subject", room: "A23", teacher: "jon due"}},
]
  },
  {
    day: "Tuesday",
    id: 2,
    classes: [
      {first: {subject: "subject", room: "A23", teacher: "jon due"}},
      {second: {subject: "subject", room: "A23", teacher: "jon due"}},
      {third: {subject: "subject", room: "A23", teacher: "jon due"}},
      {fourth: {subject: "subject", room: "A23", teacher: "jon due"}},
      {five: {subject: "subject", room: "A23", teacher: "jon due"}},
      {six: {subject: "subject", room: "A23", teacher: "jon due"}},
  ]
  },
  {
    day: "Wednesday",
    id: 3,
    classes: [
      {first: {subject: "subject", room: "A23", teacher: "jon due"}},
      {second: {subject: "subject", room: "A23", teacher: "jon due"}},
      {third: {subject: "subject", room: "A23", teacher: "jon due"}},
      {fourth: {subject: "subject", room: "A23", teacher: "jon due"}},
      {five: {subject: "subject", room: "A23", teacher: "jon due"}},
      {six: {subject: "subject", room: "A23", teacher: "jon due"}},
  ]
  },
  {
    day: "Thursday",
    id: 4,
    classes: [
      {first: {subject: "subject", room: "A23", teacher: "jon due"}},
      {second: {subject: "subject", room: "A23", teacher: "jon due"}},
      {third: {subject: "subject", room: "A23", teacher: "jon due"}},
      {fourth: {subject: "subject", room: "A23", teacher: "jon due"}},
      {five: {subject: "subject", room: "A23", teacher: "jon due"}},
      {six: {subject: "subject", room: "A23", teacher: "jon due"}},
  ]
  },
  {
    day: "Saturday",
    id: 5,
    classes: [
      {first: {subject: "subject", room: "A23", teacher: "jon due"}},
      {second: {subject: "subject", room: "A23", teacher: "jon due"}},
      {third: {subject: "subject", room: "A23", teacher: "jon due"}},
      {fourth: {subject: "subject", room: "A23", teacher: "jon due"}},
      {five: {subject: "subject", room: "A23", teacher: "jon due"}},
      {six: {subject: "subject", room: "A23", teacher: "jon due"}},
  ]
  },
  {
    day: "Sunday",
    id: 6,
    classes: [
      {first: {subject: "subject", room: "A23", teacher: "jon due"}},
      {second: {subject: "subject", room: "A23", teacher: "jon due"}},
      {third: {subject: "subject", room: "A23", teacher: "jon due"}},
      {fourth: {subject: "subject", room: "A23", teacher: "jon due"}},
      {five: {subject: "subject", room: "A23", teacher: "jon due"}},
      {six: {subject: "subject", room: "A23", teacher: "jon due"}},
  ]
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
                    {/**    <RoutinCard card={singleclass} /> */}
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
