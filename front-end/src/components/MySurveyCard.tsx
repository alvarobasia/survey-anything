import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Button,
  Container,
  Tooltip,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { IoIosTime, IoIosTimer } from "react-icons/io";
import { BsFillPeopleFill, BsFillPersonFill } from "react-icons/bs";
import { format } from "date-fns";
import { AuthContext, User } from "../contexts/AuthContext";

interface MySurveyCardProps {
  survey: Survey;
}

export default function MySurveyCard({ survey }: MySurveyCardProps) {
  const [options, setOptions] = useState<Option[]>([]);
  const [votedUsers, setVotedUsers] = useState<User[]>([]);
  const [selectOption, setSelectedOption] = useState<Option | null>(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setOptions(survey.options);

    const voted = survey.options.map((o) => o.users);

    setVotedUsers(voted.flat());
  }, [survey]);

  useEffect(() => {
    if (user && votedUsers.includes(user)) {
      setSelectedOption(
        survey.options.find((o) =>
          o.users.map((u) => u.id).includes(user.id)
        ) as any
      );
    }
  }, [votedUsers]);

  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Stack>
          <Heading
            color={useColorModeValue("#066666", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {survey.title}
          </Heading>
          {options.map((option) => {
            return (
              <Tooltip
                hasArrow
                label={`
                Votado por ${option.users.map((u) => `${user?.name},`)} 
              `}
                bg="white"
                boxShadow={useColorModeValue(
                  "0px 0px 8px rgba(0, 0, 0, 0.25)",
                  "0px 0px 8px rgba(0, 0, 0, 0.25)"
                )}
                color={useColorModeValue("#066666", "white")}
              >
                <Container
                  fontSize={"22px"}
                  rounded={"8px"}
                  bg={
                    selectOption && selectOption?.id === option.id
                      ? "#00B3B3"
                      : selectOption === null
                      ? "#00B3B3"
                      : "#AAFFFF"
                  }
                  color={
                    selectOption && selectOption?.id === option.id
                      ? "#d0ffaa"
                      : selectOption === null
                      ? "white"
                      : "red.300"
                  }
                  height={"36px"}
                  display={"flex"}
                  alignItems={"center"}
                  transition={"all 0.3s"}
                  cursor={"pointer"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                >
                  {option.title}
                  <p> - {option.users.length} votos</p>
                </Container>
              </Tooltip>
            );
          })}
        </Stack>
        <Stack direction={"row"} spacing={4} marginTop={"25px"}>
          <Container
            display={"flex"}
            alignItems={"center"}
            style={{ gap: "5px" }}
            justifyContent={"space-between"}
          >
            <IoIosTime size={32} color="#066666" />
            <Text fontSize={"14px"} color={"#066666"}>
              Aberta em {format(new Date(survey.initDate), "d  MMM, yyyy")}
            </Text>
          </Container>
          <Container
            display={"flex"}
            alignItems={"center"}
            style={{ gap: "5px" }}
            justifyContent={"space-between"}
          >
            <IoIosTimer size={32} color={"#066666"} />
            <Text fontSize={"14px"} color={"#066666"}>
              Encerra em {format(new Date(survey.endDate), "d  MMM, yyyy")}
            </Text>
          </Container>
        </Stack>

        <Stack direction={"row"} spacing={4} marginTop={"5px"}>
          <Container
            display={"flex"}
            alignItems={"center"}
            style={{ gap: "5px" }}
            justifyContent={"flex-start"}
          >
            <BsFillPeopleFill size={32} color={"#066666"} />
            <Text fontSize={"14px"} color={"#066666"}>
              Votantes:{" "}
              {survey.options.reduce((acc, option) => {
                return acc + option.numberOfVotes;
              }, 0)}
            </Text>
          </Container>
          <Container
            display={"flex"}
            alignItems={"center"}
            style={{ gap: "5px" }}
            justifyContent={"flex-start"}
          >
            <BsFillPersonFill size={32} color={"#066666"} />
            <Text color={"#066666"} fontSize={"14px"}>
              Feito por você
            </Text>
          </Container>
        </Stack>
      </Box>
    </Center>
  );
}
