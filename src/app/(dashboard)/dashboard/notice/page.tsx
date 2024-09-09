import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarIcon, UserIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const Notice = () => {
  const notices = [
    {
      id: 1,
      date: "16 June, 2019",
      content:
        "Great School Great School manag mene esom text of the printing Great School manag mene esom text of the printing manag mene esom text of the printing.",
      author: "Jennyfar Lopez",
      time: "5 min ago",
      color: "bg-teal-400",
    },
    {
      id: 2,
      date: "16 June, 2019",
      content:
        "Great School Great School manag mene esom text of the printing Great School manag mene esom text of the printing manag mene esom text of the printing.",
      author: "Jennyfar Lopez",
      time: "5 min ago",
      color: "bg-yellow-400",
    },
    {
      id: 2,
      date: "16 June, 2019",
      content:
        "Great School Great School manag mene esom text of the printing Great School manag mene esom text of the printing manag mene esom text of the printing.",
      author: "Jennyfar Lopez",
      time: "5 min ago",
      color: "bg-yellow-400",
    },
    {
      id: 2,
      date: "16 June, 2019",
      content:
        "Great School Great School manag mene esom text of the printing Great School manag mene esom text of the printing manag mene esom text of the printing.",
      author: "Jennyfar Lopez",
      time: "5 min ago",
      color: "bg-yellow-400",
    },
    {
      id: 2,
      date: "16 June, 2019",
      content:
        "Great School Great School manag mene esom text of the printing Great School manag mene esom text of the printing manag mene esom text of the printing.",
      author: "Jennyfar Lopez",
      time: "5 min ago",
      color: "bg-yellow-400",
    },
    {
      id: 2,
      date: "16 June, 2019",
      content:
        "Great School Great School manag mene esom text of the printing Great School manag mene esom text of the printing manag mene esom text of the printing.",
      author: "Jennyfar Lopez",
      time: "5 min ago",
      color: "bg-yellow-400",
    },
    // Add more notices as needed
  ];
  return (
    <div>
      <Card className="w-full rounded-xl bg-white mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Create A Notice</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4 text-[#646464]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm  font-medium">
                  Title
                </label>
                <Input
                  id="title"
                  className="outline-none bg-[#f0f1f3] border-none rounded-[4px] py-[5px] px-[15px] "
                  placeholder="Enter title"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="details" className="text-sm font-medium">
                  Details
                </label>
                <Input
                  id="details"
                  className="outline-none bg-[#f0f1f3] border-none rounded-[4px] py-[5px] px-[15px] "
                  placeholder="Enter details"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="postedBy" className="text-sm font-medium">
                  Posted By
                </label>
                <div className="relative">
                  <Input
                    id="postedBy"
                    className="outline-none bg-[#f0f1f3] border-none rounded-[4px] py-[5px] px-[15px] "
                    placeholder="Enter name"
                  />
                  <UserIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium">
                  Date
                </label>
                <div className="relative">
                  <Input
                    id="date"
                    className="outline-none bg-[#f0f1f3] border-none rounded-[4px] py-[5px] px-[15px] "
                    type="date"
                  />
                  <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button
                type="submit"
                className="bg-[#ffae01] transition duration-300  py-[12px] px-[45px] rounded-[4px] hover:bg-[#042954] text-white"
              >
                Save
              </Button>
              <Button
                type="reset"
                className="hover:bg-[#ffae01] transition duration-300  py-[12px] px-[45px] rounded-[4px] bg-[#042954] text-white"
              >
                Reset
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      {/* notice section */}
      <div className="bg-white rounded-xl mt-8 shadow-xl">
        <div className="w-full max-w-4xl mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">
            Notice Board
          </h1>

          <div className="flex space-x-4 mb-4 text-[#646464]">
            <Input
              placeholder="Search by Date ..."
              className="outline-none bg-[#f0f1f3] border-none rounded-[4px] py-[5px] px-[15px] "
            />
            <Input
              placeholder="Search by Title ..."
              className="outline-none bg-[#f0f1f3] border-none rounded-[4px] py-[5px] px-[15px] "
            />
            <Button className="bg-[#ffae01] transition duration-300  py-[12px] px-[45px] rounded-[4px] hover:bg-[#042954] text-white">
              SEARCH
            </Button>
          </div>

          <ScrollArea className="h-[400px]">
            {notices.map((notice) => (
              <Card key={notice.id} className="mb-4">
                <CardContent className="p-4">
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-sm text-white ${notice.color} mb-2`}
                  >
                    {notice.date}
                  </div>
                  <p className="text-gray-800 mb-2">{notice.content}</p>
                  <p className="text-sm text-gray-600">
                    {notice.author} / {notice.time}
                  </p>
                </CardContent>
              </Card>
            ))}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Notice;
