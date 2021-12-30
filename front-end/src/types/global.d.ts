import { IconType } from "react-icons";
import { User } from "../contexts/AuthContext";

declare global {
  export interface Option {
    id?: string;
    title: string;
    numberOfVotes: number;
    surveyId: string;
    users: User[];
  }
  export interface LinkItemProps {
    name: string;
    icon: IconType;
    path: string;
  }

  export interface OptionFormFormat {
    name: string;
    startDate: Date;
    endDate: Date;
    options: Option[];
  }

  export interface Survey {
    id: number;
    title: string;
    initDate: Date;
    endDate: Date;
    User: User;
    options: Option[];
  }

  export interface SurveyInput {
    title: string;
    initDate: Date;
    endDate: Date;
    options: string[];
  }
}
