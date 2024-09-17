const Exam = () => {
  return (
    <div>
      <div className="grid grid-cols-12 lg:gap-8 ">
        <div className="col-span-4 border-2 flex flex-col gap-2 rounded-xl border-yellow-200 p-3">
          <div>
            <h1 className=" text-center text-xl font-semibold ">
              Upcoming Exam
            </h1>
          </div>
          <div className=" flex justify-between text-lg font-medium items-center">
            <div>
              <p>Mid Term</p>
            </div>
            <div>
              <p>10/14/2024</p>
            </div>
          </div>
          <div className=" w-full relative">
            <table className=" text-center w-full  relative">
              <thead>
                <tr className="bg-gray-200 font-bold">
                  <td className="   px-3 py-2  ">Subject Name</td>
                  <td>Total Mark</td>
                  <td>Date</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className=" px-3 py-2  ">DSA</td>
                  <td>80</td>
                  <td>10/14/24</td>
                </tr>
                <tr>
                  <td className=" px-3 py-2  ">D.Math</td>
                  <td>80</td>
                  <td>10/18/24</td>
                </tr>
                <tr>
                  <td className=" px-3 py-2  ">Cyber Security</td>
                  <td>80</td>
                  <td>10/25/24</td>
                </tr>
                <tr>
                  <td className=" px-3 py-2  ">Networking</td>
                  <td>80</td>
                  <td>10/27/24</td>
                </tr>
                <tr>
                  <td className=" px-3 py-2  ">Computer Arch</td>
                  
                  <td>80</td>
                  <td>10/29/24</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-8">weekly assignment</div>
        <div className="col-span-4">Exam Help</div>
        <div className="col-span-4">Exam History</div>
        <div className="col-span-4">Calender</div>
      </div>
    </div>
  );
};

export default Exam;
