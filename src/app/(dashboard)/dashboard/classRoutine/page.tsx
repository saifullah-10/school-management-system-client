import RoutinCard from "./RoutinCard";

const routins = [
  {
    day: "Monday",
    id: 1,
  classes: [
    {subjectCode: "23706", room: "A23", teacher: "jon due"},
    {subjectCode: "23706", room: "A23", teacher: "jon due"},
    {subjectCode: "23706", room: "A23", teacher: "jon due"},
  {subjectCode: "23706", room: "A23", teacher: "jon due"},
    {subjectCode: "23706", room: "A23", teacher: "jon due"},
   {subjectCode: "23706", room: "A23", teacher: "jon due"},
]
  },
  {
    day: "Tuesday",
    id: 2,
    classes: [
    {subjectCode: "23706", room: "A23", teacher: "jon due"},
     {subjectCode: "23706",room: "A23", teacher: "jon due"},
      {subjectCode: "23706", room: "A23", teacher: "jon due"},
      {subjectCode: "23706", room: "A23", teacher: "jon due"},
   {subjectCode: "23706", room: "A23", teacher: "jon due"},
      {subjectCode: "23706", room: "A23", teacher: "jon due"},
  ]
  },
  {
    day: "Wednesday",
    id: 3,
    classes: [
    {subjectCode: "23706", room: "A23", teacher: "jon due"},
       {subjectCode: "23706", room: "A23", teacher: "jon due"},
      {subjectCode: "23706", room: "A23", teacher: "jon due"},
      {subjectCode: "23706", room: "A23", teacher: "jon due"},
    {subjectCode: "23706", room: "A23", teacher: "jon due"},
      {subjectCode: "23706", room: "A23", teacher: "jon due"},
  ]
  },
  {
    day: "Thursday",
    id: 4,
    classes: [
  {subjectCode: "23706", room: "A23", teacher: "jon due"},
       {subjectCode: "23706", room: "A23", teacher: "jon due"},
      {subjectCode: "23706", room: "A23", teacher: "jon due"},
     {subjectCode: "23706", room: "A23", teacher: "jon due"},
    {subjectCode: "23706", room: "A23", teacher: "jon due"},
    {subjectCode: "23706", room: "A23", teacher: "jon due"},
  ]
  },
  {
    day: "Saturday",
    id: 5,
    classes: [
    {subjectCode: "23706", room: "A23", teacher: "jon due"},
      {subjectCode: "23706", room: "A23", teacher: "jon due"},
     {subjectCode: "23706", room: "A23", teacher: "jon due"},
     {subjectCode: "23706", room: "A23", teacher: "jon due"},
      {subjectCode: "23706", room: "A23", teacher: "jon due"},
      {subjectCode: "23706", room: "A23", teacher: "jon due"},
  ]
  },
  {
    day: "Sunday",
    id: 6,
    classes: [
      {subjectCode: "23706", room: "A23", teacher: "jon due"},
     {subjectCode: "23706", room: "A23", teacher: "jon due"},
      {subjectCode: "23706", room: "A23", teacher: "jon due"},
     {subjectCode: "23706", room: "A23", teacher: "jon due"},
     {subjectCode: "23706", room: "A23", teacher: "jon due"},
     {subjectCode: "23706", room: "A23", teacher: "jon due"},
  ]
  },
];

const classNameRoutine = () => {
  return (
    <div className="container h-[30rem] mx-auto">
      <div className= "mb-2 lg:mb-4"><h1 className="text-2xl lg:text-3xl  font-bold text-center ">CSE Department</h1>
      <p className= " text-center text-lg lg:text-xl">Class Routine</p></div>
      <div className="overflow-x-auto custom-scrollbar  h-full min-w-full relative">
        <table className="  absolute top-0 left-0 w-full ">
          {/* <!-- Header with className times --> */}
          <thead>
            <tr className="bg-blue-800 text-white">
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
                  <td className="py-2 px-4  ">
                    {day.day}
                  </td>
                  {day.classes.map((singleclass, ind) => (
                    <>
                      <td
                        key={`${day.id}-${ind}`}
                        className="py-2 px-4"
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
