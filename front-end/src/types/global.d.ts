import { IconType } from "react-icons";

declare global {
  export interface Option {
    id?: string;
    name: string;
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
}
