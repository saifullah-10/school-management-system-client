"use client";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/contextProvider/ContextProvider";
import { getNoticeData } from "@/utils/api/noticeApis";
import timeAgo from "@/utils/globalFunction/timeAgoFn";
import { NoticeInputs } from "@/utils/types/noticeTypes";
import { useQuery } from "@tanstack/react-query";

const NoticeBoard = () => {
  const { user } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: ["get-notice-common-data"],
    queryFn: () => getNoticeData(),
  });
  function getRandomColorCode(colorCodes: string[]) {
    const randomIndex = Math.floor(Math.random() * colorCodes.length);

    return colorCodes[randomIndex];
  }

  const colorCodes = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#9B59B6"];

  const randomColor = getRandomColorCode(colorCodes);
  if (isLoading) {
    <div>loading in notice</div>;
  }
  return (
    <div>
      <div className="">
        <div className="max-w-md mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Notice Board</h1>

          <ScrollArea className="h-[305px]">
            {data?.map((notice: NoticeInputs) => {
              const convertDate = new Date(notice.posted).toDateString();
              return (
                <Card key={notice._id} className="mb-4">
                  <CardContent className="p-4">
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-sm text-white ${randomColor} mb-2`}
                    >
                      {convertDate}
                    </div>
                    <p className="text-gray-800 text-sm mb-2">
                      {notice.content}
                    </p>
                    <p className="text-sm text-gray-600">
                      {user?.username} / {timeAgo(convertDate)}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
