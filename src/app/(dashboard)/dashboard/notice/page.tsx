"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarIcon, UserIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  NoticeInputs,
  PostApiResponse,
  SearchTypes,
} from "@/utils/types/noticeTypes";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "@/contextProvider/ContextProvider";
import { getNoticeData, postNoticeData } from "@/utils/api/noticeApis";
import { useQuery } from "@tanstack/react-query";
import timeAgo from "@/utils/globalFunction/timeAgoFn";
import { useEffect, useState } from "react";

const Notice: React.FC = () => {
  const { user } = useAuth();
  const [searchValue, setSearchValue] = useState<SearchTypes>({});
  console.log(searchValue);
  function getRandomColorCode(colorCodes: string[]) {
    const randomIndex = Math.floor(Math.random() * colorCodes.length);

    return colorCodes[randomIndex];
  }

  const colorCodes = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#9B59B6"];

  function getFormattedDate() {
    const date = new Date();

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = String(date.getFullYear());

    return `${year}-${month}-${day}`; // Return in YYYY-MM-DD format
  }

  // Example usage
  const formattedDate = getFormattedDate();
  const { data, refetch, isLoading, isFetching } = useQuery({
    queryKey: ["get-notice-data"],
    queryFn: () => getNoticeData(searchValue),
  });

  useEffect(() => {
    refetch();
  }, [searchValue, refetch]);

  const {
    register: addData,
    handleSubmit: addSubmit,

    formState: { errors: addError },
  } = useForm<NoticeInputs>();

  const onSubmit: SubmitHandler<NoticeInputs> = async (data) => {
    const title = data.title;
    const content = data.content;
    const posted = new Date(formattedDate);
    const postedBy = user?.email;

    const noticeData: NoticeInputs = { title, content, posted, postedBy };
    console.log(posted);
    try {
      const res = (await postNoticeData(noticeData)) as PostApiResponse;
      const resData = res.data.message;

      if (resData) {
        refetch();
        alert("success");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const { register: searchData, handleSubmit: searchSubmit } =
    useForm<NoticeInputs>();

  const handleSearchData: SubmitHandler<SearchTypes> = async (data) => {
    setSearchValue(data);
  };

  if (isLoading || isFetching) {
    <div>loading from notice page</div>;
  }
  return (
    <div>
      <Card className="w-full rounded-xl bg-white mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Create A Notice</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={addSubmit(onSubmit)}
            className="space-y-4 text-[#646464]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm  font-medium">
                  Title
                </label>
                <Input
                  id="title"
                  {...addData("title", { required: true })}
                  className="outline-none bg-[#f0f1f3] border-none rounded-[4px] py-[5px] px-[15px] "
                  placeholder="Enter title"
                />
                <div>
                  {addError.title && (
                    <span className=" text-red-500">Title is required</span>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="details" className="text-sm font-medium">
                  Details
                </label>
                <Input
                  id="details"
                  {...addData("content", { required: true })}
                  className="outline-none bg-[#f0f1f3] border-none rounded-[4px] py-[5px] px-[15px] "
                  placeholder="Enter details"
                />
                <div>
                  {addError.content && (
                    <span className=" text-red-500">Title is required</span>
                  )}
                </div>
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
                    className="outline-none cursor-not-allowed bg-[#f0f1f3] border-none rounded-[4px] py-[5px] px-[15px] "
                    value={user?.username}
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
                    value={formattedDate}
                    className="outline-none cursor-not-allowed bg-[#f0f1f3] border-none rounded-[4px] py-[5px] px-[15px] "
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
          <h1 className="text-2xl font-bold mb-4">Notice Board</h1>

          <form onSubmit={searchSubmit(handleSearchData)}>
            <div className="flex space-x-4 mb-4 text-[#646464]">
              <Input
                type="date"
                // placeholder="Search by Date ... must be yy/mm/dd"
                className="outline-none bg-[#f0f1f3] border-none rounded-[4px] py-[5px] px-[15px] "
                {...searchData("posted")}
              />
              <Input
                placeholder="Search by Title ..."
                {...searchData("title")}
                className="outline-none bg-[#f0f1f3] border-none rounded-[4px] py-[5px] px-[15px] "
              />
              <Button className="bg-[#ffae01] transition duration-300  py-[12px] px-[45px] rounded-[4px] hover:bg-[#042954] text-white">
                SEARCH
              </Button>
            </div>
          </form>

          <ScrollArea className="h-[400px]">
            {data?.map((notice: NoticeInputs) => {
              const randomColor = getRandomColorCode(colorCodes);
              const convertDate = new Date(notice.posted).toDateString();
              return (
                <Card key={notice._id} className="mb-4">
                  <CardContent className="p-4">
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-sm text-white mb-2`}
                      style={{ backgroundColor: randomColor }}
                    >
                      {convertDate}
                    </div>
                    <h1 className="text-lg lg:text-2xl mb-1 lg:mb-3">
                      {notice.title}
                    </h1>
                    <p className="text-gray-600 mb-2">{notice.content}</p>
                    <p className="text-sm text-gray-400">
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

export default Notice;
