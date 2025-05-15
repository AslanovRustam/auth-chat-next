import { StaticImageData } from "next/image";

export interface IUser {
  userName: string;
  password: string;
}

export interface IUserForChat {
  userName: string;
  message: string;
  avatar: string | StaticImageData;
}

export interface IMessage {
  id: string;
  userName: string;
  message: string;
  avatar: string | StaticImageData;
  time: string;
}
