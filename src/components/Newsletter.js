import {
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Icon,
  useColorModeValue,
  useMediaQuery,
  Center,
  Checkbox,
} from "@chakra-ui/react";

import "@fontsource/poppins";

export default function Newsletter() {
  const [isLargerThanLG] = useMediaQuery("(min-width: 62em)");
  return (
    <Flex
      align={"center"}
      justify={"center"}
      // // py={12}
      // bg={useColorModeValue("#F8F8F8", "gray.800")}
    >
      <Stack
        bg={useColorModeValue("#F8F8F8", "gray.700")}
        rounded={"xl"}
        p={5}
        spacing={8}
        align={"center"}
      >
        <Stack align={"center"} spacing={2}>
          <Heading
            fontFamily={"Poppins"}
            textTransform={""}
            fontSize={"50px"}
            color={"black"}
            align="center"
            fontWeight={"600"}
            lineHeight="76px"
            width={"100%"}
          >
            Join the Cryptip waitlist to be updated
          </Heading>
        </Stack>
        <Stack
          spacing={2}
          direction={{ base: "column", md: "column" }}
          w={{ base: "350px", md: "490px" }}
          // w={"490px"}
        >
          <Text
            // fontFamily={"Poppins"}
            // fontSize={"lg"}
            // color={useColorModeValue("gray.800", "gray.200")}
            fontFamily={"Poppins"}
            fontstyle="normal"
            fontweight="700"
            fontsize="19px"
            line-height="29px"
            letter-spacing="0.230587px"
            color="#45389B"
            width={"167px"}
          >
            Full Names
          </Text>
          <Input
            type={"text"}
            fontFamily="Inter"
            lineHeight={"22px"}
            fontWeight="400"
            placeholder={"Obed Omwenga"}
            color={useColorModeValue("#474747", "gray.200")}
            bg={useColorModeValue("#E7E7E7", "gray.600")}
            borderRadius="13px"
            mixBlendMode={"normal"}
            height="50px"
            border={0}
            _focus={{
              bg: useColorModeValue("gray.200", "gray.800"),
              outline: "none",
            }}
          />
          <Text
            // fontFamily={"Poppins"}
            // fontSize={"lg"}
            // color={useColorModeValue("gray.800", "gray.200")}
            fontFamily={"Poppins"}
            fontstyle="normal"
            fontweight="700"
            fontsize="19px"
            line-height="29px"
            letter-spacing="0.230587px"
            color="#45389B"
            width={"167px"}
          >
            Email ID
          </Text>
          <Input
            type={"text"}
            fontFamily="Inter"
            lineHeight={"22px"}
            fontWeight="400"
            placeholder={"ObedOmwenga@gmail.com"}
            color={useColorModeValue("#474747", "gray.200")}
            bg={useColorModeValue("#E7E7E7", "gray.600")}
            borderRadius="13px"
            mixBlendMode={"normal"}
            height="50px"
            border={0}
            _focus={{
              bg: useColorModeValue("gray.200", "gray.800"),
              outline: "none",
            }}
          />

          <Checkbox
            size="sm"
            colorScheme="red"
            fontFamily={"Inter"}
            fontstyle="normal"
            fontweight="500"
            fontsize="14px"
            line-height="18px"
            p={2}
          >
            Good to have you on board, Subscribe to our offer lists
          </Checkbox>
          {/* <Button
              border={"1px solid #000000"}
              
              borderRadius={"13.8352px"}
              bg={"#000000"}
              width='486px'
              color={"white"}
              flex={"1 0 auto"}
              _hover={{ bg: "black.400" }}
              _focus={{ bg: "black.500" }}
            >
              Join Waitlist
            </Button> */}
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              borderRadius={"13.8352px"}
              size={"lg"}
              fontWeight={"normal"}
              width="486px"
              color={"white"}
              bg={"black"}
              _hover={{ bg: "black" }}
            >
              Submit
            </Button>
          </Stack>
          <Center>
            <Text
              // fontSize={"lg"}
              // color={useColorModeValue("gray.800", "gray.200")}

              fontFamily={"Inter"}
              fontstyle="normal"
              fontweight="400"
              fontsize="16.1411px"
              line-height="21px"
              /* or 129% */

              align="center"
              color="#1E1E1E"
              w="307px"
              mt={"2"}
            >
              Thank you for choosing success in your payments and tipping with
              Cryptip.
            </Text>
          </Center>
        </Stack>
      </Stack>
    </Flex>
  );
}
