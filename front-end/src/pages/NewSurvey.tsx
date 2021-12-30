import {
  Button,
  Container,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

// import { Container } from './styles';

const NewSurvey: React.FC = () => {
  const [options, setOptions] = useState<string[]>(["", "", "", ""]);
  const [name, setName] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  function handleAddOption(text: string, optionIndex: number) {
    setOptions((options) => {
      const newOptions = [...options];
      newOptions[optionIndex] = text;
      return newOptions;
    });
  }

  function handleConfirmOption() {
    if (endDate && startDate && endDate < startDate) {
      const newOption: OptionFormFormat = {
        name,
        endDate,
        startDate,
        options: options.map((option) => ({ name: option })),
      };
    }
  }

  function handleChangeDate(date: Date, type: "start" | "end") {
    if (type === "start") {
      if (endDate && date.getTime() < endDate.getTime()) {
        setStartDate(date);
        return;
      }

      if (!endDate) setStartDate(date);
    } else {
      if (startDate && date.getTime() > startDate.getTime()) {
        setEndDate(date);
        return;
      }

      if (!startDate) setEndDate(date);
    }
  }

  return (
    <>
      <Text fontSize={"32px"} fontWeight={"500"}>
        Criar uma nova enquete
      </Text>
      <Stack
        mt={4}
        padding={"5px"}
        boxShadow={`0px 0px 5px -2px rgba(0, 0, 0, 0.25)`}
        rounded={"8px"}
      >
        <Text mb="8px">Nome da enquete</Text>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Por exemplo: Qual é o melhor animal de estimação"
          size="md"
        />
      </Stack>
      <Stack
        mt={4}
        padding={"5px"}
        boxShadow={`0px 0px 5px -2px rgba(0, 0, 0, 0.25)`}
        rounded={"8px"}
      >
        <Text mb="8px">Opções</Text>
        {options.map((option, index) => {
          return (
            <InputGroup size="sm" key={index}>
              <InputLeftAddon
                bg={"#006666"}
                color={"white"}
                children={`Opção ${index + 1}`}
              />
              <Input
                padding={"0px 15px !important"}
                onChange={(e) => handleAddOption(e.target.value, index)}
                placeholder={`Digite aqui a opcão ${index + 1}`}
                value={option}
              />
            </InputGroup>
          );
        })}
      </Stack>
      <Stack
        mt={4}
        padding={"5px"}
        boxShadow={`0px 0px 5px -2px rgba(0, 0, 0, 0.25)`}
        rounded={"8px"}
        w={"100%"}
      >
        <Text mb="8px">Datas</Text>
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <Input
            onChange={(e) =>
              handleChangeDate(new Date(e.target.value), "start")
            }
            margin={0}
            style={{ marginTop: "0 !important" }}
            padding={0}
            type={"date"}
            value={
              startDate
                ? `${startDate?.getFullYear()}-${
                    startDate?.getMonth() + 1 < 10
                      ? `0${startDate?.getMonth() + 1}`
                      : startDate?.getMonth() + 1
                  }-${
                    startDate?.getDate() + 1 < 10
                      ? `0${startDate?.getDate() + 1}`
                      : startDate?.getDate() + 1
                  }`
                : ""
            }
            width={"50%"}
          />
          <Input
            onChange={(e) => handleChangeDate(new Date(e.target.value), "end")}
            margin={0}
            padding={0}
            style={{ marginTop: "0 !important" }}
            type={"date"}
            width={"50%"}
            value={
              endDate
                ? `${endDate?.getFullYear()}-${
                    endDate?.getMonth() + 1 < 10
                      ? `0${endDate?.getMonth() + 1}`
                      : endDate?.getMonth() + 1
                  }-${
                    endDate?.getDate() + 1 < 10
                      ? `0${endDate?.getDate() + 1}`
                      : endDate?.getDate() + 1
                  }`
                : ""
            }
          />
        </div>
      </Stack>
      <Button
        disabled={
          !startDate || !endDate || name === "" || options.some((o) => o === "")
        }
        mt={8}
        w={"full"}
        bg={"#006666"}
        color={"white"}
      >
        Salvar enquete
      </Button>
    </>
  );
};

export default NewSurvey;
