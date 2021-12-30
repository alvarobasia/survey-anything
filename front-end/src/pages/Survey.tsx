import { Button, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import SurveyCard from "../components/SurveyCard";

// import { Container } from './styles';

const Surveys: React.FC = () => {
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
        <SurveyCard />
        <SurveyCard />
      </div>
    </>
  );
};

export default Surveys;
