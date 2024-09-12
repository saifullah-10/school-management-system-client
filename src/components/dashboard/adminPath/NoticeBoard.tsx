import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const NoticeBoard = () => {
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
      <div className="">
        <div className="max-w-md mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">
            Notice Board
          </h1>

          <ScrollArea className="h-[305px]">
            {notices.map((notice) => (
              <Card key={notice.id} className="mb-4">
                <CardContent className="p-4">
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-sm text-white ${notice.color} mb-2`}
                  >
                    {notice.date}
                  </div>
                  <p className="text-gray-800 text-sm mb-2">{notice.content}</p>
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

export default NoticeBoard;
