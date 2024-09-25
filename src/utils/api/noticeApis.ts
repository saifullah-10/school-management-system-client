import axiosInstance from "@/lib/axios";
import { NoticeInputs, SearchTypes } from "../types/noticeTypes";

export const postNoticeData = async (data: NoticeInputs) => {
  try {
    const res = await axiosInstance.post("/notice/send", data);
    return res;
  } catch (err) {
    return err;
  }
};

export const getNoticeData = async (data?: SearchTypes) => {
  if (data) {
    const { posted, title } = data;
    try {
      const res = await axiosInstance.get(
        `/notice?searchdate=${posted || ""}&title=${title || ""}`
      );

      return res.data;
    } catch (err) {
      return err;
    }
  } else {
    try {
      const res = await axiosInstance.get(`/notice?searchdate=&title=`);

      return res.data;
    } catch (err) {
      return err;
    }
  }
};
