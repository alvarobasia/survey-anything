import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { SurveyContext } from "../contexts/SurveyContext";
import SurveyCard from "./SurveyCard";

// import { Container } from './styles';

const SurveyContainer: React.FC = () => {
  const { surveys, vote } = useContext(SurveyContext);
  const { user } = useContext(AuthContext);
  function handleVote(option: Option) {
    if (option.id) vote(+option.id);
  }

  useEffect(() => {
    console.log(surveys);
  }, [surveys]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {surveys.map((survey) => {
        if (user && survey.User.id !== user.id) {
          return (
            <SurveyCard
              handleVote={handleVote}
              key={survey.id}
              survey={survey}
            />
          );
        }
        return <> </>;
      })}
    </div>
  );
};

export default SurveyContainer;
