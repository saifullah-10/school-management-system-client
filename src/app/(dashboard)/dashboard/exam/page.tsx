const Exam = () => {
  return (
    <div>
      <div className="grid grid-cols-12 lg:gap-8 ">
        <div className="col-span-4 border-2 flex flex-col gap-2 rounded-xl border-blue-200 p-3">
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
                <tr className="bg-blue-300 font-bold">
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
                  <td className=" px-3 py-2p  ">Cyber Security</td>
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
        <div className="col-span-8 relative h-96 border-2 border-blue-300 overflow-y-scroll ">
          <table className=" w-full relative rounded-xl">
            <thead className=" sticky top-0 bg-blue-300 mx-3 ">
              <tr className=" text-center">
                <td className=" py-2 mb-3">No</td>
                <td className=" py-2 mb-3">Subject</td>
                <td className=" py-2 mb-3">Last Date</td>
                <td className=" py-2 mb-3 text-center">Action</td>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 20 }, (_, index: number) => (
                <tr key={index} className=" text-center">
                  <td className=" py-2">1</td>
                  <td>Weekly Assignment For Dsa </td>
                  <td>4/12/2024</td>
                  <td className=" py-2 flex justify-center">
                    <button className=" bg-blue-200 border border-blue-600  text-black px-3 py-1 rounded-xl">
                      Start
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-span-4">
          <form>
            <textarea
              rows={10}
              className=" w-full outline-none bg-slate-100 p-3 rounded-xl border-gray-400 border-2 "
              placeholder="Please Send Your Problem"
              name="student-help"
              id="help"
            ></textarea>
            <button
              type="submit"
              className=" text-center bg-blue-500 w-full py-2 rounded-xl text-white"
            >
              Send
            </button>
          </form>
        </div>
        <div className="col-span-4">
          <div>
            <h1 className=" text-center my-5 font-semibold ">Exam History</h1>
          </div>
          <div className=" border-2 border-blue-300 relative  w-full overflow-y-scroll   h-60">
            <table className=" text-center relative w-full ">
              <thead className="sticky bg-blue-300 mx-3  top-0">
                <tr className=" text-center">
                  <td>Exam Name</td>
                  <td>Date</td>
                  <td>Marks</td>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 20 }, (_, index) => (
                  <tr key={index}>
                    <td>Mid Term</td>
                    <td>17/08/24</td>
                    <td>70%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-4">Calender</div>
      </div>
    </div>
  );
};

export default Exam;
