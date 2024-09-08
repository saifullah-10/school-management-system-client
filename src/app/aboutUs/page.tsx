import Image from "next/image";
import department from "@/app/aboutUs/deptInfo"
export default function AboutUs() {

  return (
    <div>
      <div>
        {department.map((dept, index) => (
          <div
            key={index}
            className={`container mx-auto px-4 py-8 flex flex-col md:${
              dept.isReverse ? "flex-row-reverse" : "flex-row"
            } items-center`}
          >
            <div className="md:w-1/2 pr-8">
              <h1 className="text-3xl font-bold text-blue-900 mb-4">
                {dept.deptName}
              </h1>
              <p className="text-gray-700 mb-6">{dept.deptDetails}</p>
              <ul className="mb-6">
                {dept?.deptFeatures?.map((item, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <Image
                src={dept.deptImage}
                width={500}
                height={500}
                loading={"lazy"}
                alt="department image"
                className="rounded-xl  shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
