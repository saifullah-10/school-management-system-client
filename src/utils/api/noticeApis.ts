import axiosInstance from "@/lib/axios";
import { NoticeInputs } from "../types/noticeTypes";

export const postNoticeData = async (data: NoticeInputs) => {
  try {
    const res = await axiosInstance.post("/notice/send", data);
    return res;
  } catch (err) {
    return err;
  }
};

export const getNoticeData = async () => {
  try {
    const res = await axiosInstance.get("/notice");

    return res.data;
  } catch (err) {
    return err;
  }
};
