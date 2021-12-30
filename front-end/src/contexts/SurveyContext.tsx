import { createContext, PropsWithChildren, useState } from "react";
import { createSurveyService } from "../services/createSurvey";
import { getSurveysService } from "../services/getSurveys";
import { voteService } from "../services/voteService";

type SurveyContextType = {
  surveys: Survey[];
  getSurveys: () => void;
  vote: (optionId: number) => void;
  createSurvey: (survey: SurveyInput) => Promise<void>;
};

export type User = {
  id: string;
  username: string;
  email: string;
};

export const SurveyContext = createContext({} as SurveyContextType);

export function SurveyProvider(props: PropsWithChildren<any>) {
  const [surveys, setSurveys] = useState<Survey[]>([]);
  async function getSurveys() {
    const { data } = await getSurveysService();

    setSurveys(data);
  }

  async function vote(optionId: number) {
    await voteService(optionId);

    getSurveys();
  }

  async function createSurvey(survey: SurveyInput) {
    await createSurveyService(survey);

    getSurveys();
  }

  return (
    <SurveyContext.Provider value={{ surveys, getSurveys, vote, createSurvey }}>
      {props.children}
    </SurveyContext.Provider>
  );
}
