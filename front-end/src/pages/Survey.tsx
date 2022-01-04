import { Button, Stack, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MySurveyCard from "../components/MySurveyCard";
import { AuthContext } from "../contexts/AuthContext";
import { SurveyContext } from "../contexts/SurveyContext";

const Surveys: React.FC = () => {
  const { surveys } = useContext(SurveyContext);
  const { user } = useContext(AuthContext);
  const nav = useNavigate();
  return (
    <>
      <Stack>
        <Button
          onClick={() => nav("/surveys/new")}
          bg={"#00B3B3"}
          color={"white"}
          fontWeight={"500"}
          _hover={{ color: "black", bg: "#AAFFFF" }}
        >
          Criar nova enquete
        </Button>
        <Text textAlign={"center"} fontWeight={"bold"} fontSize={"32px"}>
          Suas enquetes
        </Text>
      </Stack>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {surveys.map((survey) => {
          if (user && survey.User && survey.User.id === user.id) {
            return <MySurveyCard key={survey.id} survey={survey} />;
          }
          return <></>;
        })}
      </div>
    </>
  );
};

export default Surveys;
