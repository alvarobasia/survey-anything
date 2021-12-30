import { useState } from "react";
import {
  Flex,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";

const CMdEmail = chakra(MdEmail);

const CFaLock = chakra(FaLock);

const CAiFillEye = chakra(AiFillEye);
const CAiFillEyeInvisible = chakra(AiFillEyeInvisible);

const Login = () => {
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="#19ffff49"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <img src="assets/logo.svg" />
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
              borderRadius={"16px"}
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CMdEmail color="gray.300" />}
                  />
                  <Input type="email" placeholder="E-mail" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Senha"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? (
                        <CAiFillEyeInvisible color="gray.600" />
                      ) : (
                        <CAiFillEye color="gray.600" />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              7
              <Button
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                borderRadius={"8px"}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Novo por aqui?{" "}
        <Link onClick={() => nav("/register")} color="teal.500" href="#">
          Se registrar
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;
