import { Dispatch, SetStateAction } from "react";

export interface UserData {
  MotherName: string;
  address: string;
  bloodGroup: string;
  classId: string;
  dateOfBirth: string;
  email: string;
  fatherName: string;
  gender: string;
  phoneNumber: string;
  message: string;
  photoUrl: string;
  role: string;
  status: string;
  username: string;
  _id: string;
  refreshToken?: string;
  authentication?: object;
}

export interface AuthContextProps {
  user: UserData | null;
  setUser: (user: UserData | null) => void;
  logout?: () => void;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}
