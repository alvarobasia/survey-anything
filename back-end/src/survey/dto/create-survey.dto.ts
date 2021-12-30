import { User } from '@prisma/client';

export interface Option {
  title: string;
  numberOfVotes: number;
}

export class CreateSurveyDto {
  title: string;
  user: User;
  options: Option[];
  initDate: Date;
  endDate: Date;
}
