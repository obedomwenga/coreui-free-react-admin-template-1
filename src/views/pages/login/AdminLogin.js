import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  HStack,
  Spacer,
  Divider,
} from "@chakra-ui/react";
import LoginImg from "../../../assets/images/Loginimg.png";

export default function AdminLogin() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex  className="AdminLogin" id="AdminLogin" p={8} flex={1} align={"center"} justify={"center" } >
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading
            color="#091B73"
            fontFamily="Inter"
            fontStyle="normal"
            fontWeight="500"
            fontSize="30.348px"
            lineHeight="16px"
          >
            Hello, Welcome back
          </Heading>
          <FormControl id="email">
            <Input
              type="email"
              placeholder="Email"
              // border={"0"}
              borderTop={"0"}
              borderLeft={"0"}
              borderRight={"0"}
              borderRadius="0"
              borderBottomColor="blue"
              fontFamily="Inter"
              fontStyle="normal"
              fontWeight="400"
              fontSize="29px"
              lineHeight="17px"
            />
          </FormControl>
          <FormControl id="password">
            <Input
              type="password"
              placeholder="Password"
              borderTop={"0"}
              borderLeft={"0"}
              borderRight={"0"}
              borderRadius="0"
              borderBottomColor="blue"
              color={"#6A6F79"}
              fontFamily="Inter"
              fontStyle="normal"
              fontWeight="500"
              fontSize="22px"
              lineHeight="17px"
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
            </Stack>
            <HStack>
              <Link color={"blue.500"}>Forgot password?</Link>
              <Spacer />
              <Button
                background={"#45389B"}
                color="White"
                variant={"solid"}
                align="right"
                width={"250px"}
                borderRadius="142.788px"
              >
                Sign in
              </Button>
            </HStack>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
