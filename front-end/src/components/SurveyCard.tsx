import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Button,
  Container,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { IoIosTime, IoIosTimer } from "react-icons/io";
import { BsFillPeopleFill, BsFillPersonFill } from "react-icons/bs";
export default function SurveyCard() {
  const [options, setOptions] = useState<Option[]>([]);
  const [selectOption, setSelectedOption] = useState<Option | null>(null);

  function handleClickOption(option: Option) {
    if (option.id === selectOption?.id) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
  }

  useEffect(() => {
    setOptions([
      {
        id: "1",
        name: "Option 1",
      },
      {
        id: "2",
        name: "Option 2",
      },
      {
        id: "3",
        name: "Option 3",
      },
      {
        id: "4",
        name: "Option 4",
      },
    ]);
  }, []);
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
            Qual o melhor animal de estimação?
          </Heading>
          {options.map((option) => {
            return (
              <Container
                // flex={1}
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
                _hover={{
                  bg: "#AAFFFF",
                  color: "#006666",
                }}
                onClick={() => handleClickOption(option)}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
              >
                {selectOption && selectOption.id === option.id ? (
                  <div style={{ width: "26px" }}>
                    <BsCheckLg />
                  </div>
                ) : (
                  <div style={{ width: "26px" }}></div>
                )}
                {option.name}
              </Container>
            );
          })}
        </Stack>
        <Button
          mt={4}
          fontSize={"28px"}
          fontWeight={500}
          rounded={"full"}
          _focus={{
            bg: "gray.200",
            boxShadow: "3px 2px 5px -2px rgba(0, 0, 0, 0.25)",
          }}
          width={"full"}
          disabled={!selectOption}
        >
          Votar
        </Button>
        <Stack direction={"row"} spacing={4} marginTop={"25px"}>
          <Container
            display={"flex"}
            alignItems={"center"}
            style={{ gap: "5px" }}
            justifyContent={"space-between"}
          >
            <IoIosTime size={32} color="#066666" />
            <Text fontSize={"14px"} color={"#066666"}>
              Aberta em Feb 08, 2021
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
              Encerra em Feb 08, 2021
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
              Votantes: 90
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
              Feito por sss
            </Text>
          </Container>
        </Stack>
      </Box>
    </Center>
  );
}
