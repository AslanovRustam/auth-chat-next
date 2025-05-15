import { IMessage, IUserForChat } from "@/types/types";
import mark from "../../public/images/Ellipse 1.png";

export const defaultUserList: IUserForChat[] = [
  {
    userName: "Cameron Williamson",
    message:
      "Not too bad, just trying to catch up on some work. How about Not too bad, just trying to catch up on some work. How about ",
    avatar: mark,
  },
  {
    userName: "Bessie Cooper",
    message:
      "That's a good idea. I'll have to try that. So, what's the latest on your end? That's a good idea. I'll have to try that. So, what's the latest o",
    avatar: "",
  },
  {
    userName: "Courtney Henry",
    message:
      "Sure, that sounds good. I need to take a break from staring at the Sure, that sounds good. I need to take a break from staring at the",
    avatar: "",
  },
  {
    userName: "Guy Hawkins",
    message: "when will it be ready?",
    avatar: "",
  },
  {
    userName: "Robert Fox",
    message:
      "Good point. Typography is another aspect I'm curious ab Good point. Typography is another aspect I'm curious ab",
    avatar: "",
  },
  {
    userName: "Cameron Williamson1",
    message:
      "Not too bad, just trying to catch up on some work. How about Not too bad, just trying to catch up on some work. How about ",
    avatar: mark,
  },
  {
    userName: "Bessie Cooper1",
    message:
      "That's a good idea. I'll have to try that. So, what's the latest on your end? That's a good idea. I'll have to try that. So, what's the latest o",
    avatar: "",
  },
  {
    userName: "Courtney Henry1",
    message:
      "Sure, that sounds good. I need to take a break from staring at the Sure, that sounds good. I need to take a break from staring at the",
    avatar: "",
  },
];

export const STATUS = {
  active: "green",
  inActive: "red",
};

export const TRIAL_MESSAGES: IMessage[] = [
  {
    id: "1",
    userName: "Robert Fox",
    avatar: mark,
    message:
      "Got it. And what's your take on incorporating animations? I've seen them on many sites lately.",
    time: "10:45 AM",
  },
  {
    id: "2",
    userName: "me",
    avatar: "",
    message:
      "Animations can enhance user engagement, but use them judiciously. Subtle animations for transitions or highlighting elements can make the site feel dynamic without overwhelming users.",
    time: "10:52 AM",
  },

  {
    id: "3",
    userName: "Robert Fox",
    avatar: mark,
    message:
      "That makes sense. How about mobile responsiveness? It's a must nowadays, right?",
    time: "11:00 AM",
  },
  {
    id: "4",
    userName: "me",
    avatar: "",
    message:
      "Absolutely. More users access websites from mobile devices. Design for mobile-first, ensuring that the site looks and functions well on smaller screens.",
    time: "11:12 AM",
  },
  {
    id: "5",
    userName: "Robert Fox",
    avatar: mark,
    message:
      "Good point. Typography is another aspect I'm curious about. Any font suggestions for a modern look?",
    time: "11:13 AM",
  },
];
