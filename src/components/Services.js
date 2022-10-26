import {
  Flex,
  Spacer,
  Image,
  Text,
  Button,
  useMediaQuery,
  Stack,
  VStack,
  HStack,
  Heading,
  useColorModeValue,
  List,
  ListIcon,
  ListItem,
  Box,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import exchange from "../assets/images/exchange.png";
import features from "../assets/images/features.png";
import tons from "../assets/images/tons.png";
import arrow from "../assets/images/arrow.png";
import { FaCheckCircle } from "react-icons/fa";
import CustomBtn from "./CustomBtn";

const Services = ({ header, text, btnText, image, direction }) => {
  const [isLargerThanLG] = useMediaQuery("(min-width: 62em)");

  return (
    <Flex
    className="services"
      id="services"
      // width="100%"
      minHeight="70vh"
      alignItems="center"
      // px={isLargerThanLG ? "16" : "6"}
      py="16"
      justifyContent="center"
      flexDirection={["column", "column"]}
    >
      <VStack spacing={{ base: 100, md: 100 }}>
        <HStack flexDirection={{ base: "column", md: "row" }}>
          <Flex
            // w={isLargerThanLG ? "full" : "full"}
            // mb={isLargerThanLG ? "4" : "6"}
            // alignItems="center"
            // justifyContent="center"
            // flex={1}
            justify={"center"}
            align={"center"}
            // position={'relative'}
            w={{ base: "100%", md: "100%" }}
            p="5"
          >
            <Image
              fit={"cover"}
              align={"center"}
              w={"90%"}
              h={"100%"}
              src={exchange}
              alt="Chakra Team"
            />
          </Flex>
          <Spacer />
          <Flex
            // w={isLargerThanLG ? "60%" : "full"}
            flexDirection="column"
            // ml={isLargerThanLG ? "7" : "0"}
            w={["250px", "362px", "690px"]}
          >
            <Heading
              as={"h3"}
              size="2xl"
              fontFamily={"Poppins"}
              fontstyle="normal"
              fontweight="500"
              fontsize="50px"
              line-height="76px"
              w={["250px", "362px", "690px"]}
              mb="6"
            >
              {"Exchange your Crypto or tokens in minutes."}
            </Heading>

            <Text
              mb="2"
              fontFamily={"Poppins"}
              fontstyle="normal"
              fontweight="400"
              fontsize="20px"
              line-height="37px"
              w={["250px", "336px", "600px"]}
              color="black"
            >
              {
                "Enter the amount you’d like to convert to cryptocurrency. 10+ currencies supported, including USD, EUR, GPB and more. We preoritize the experience you are going through when you exchange your USDT."
              }
            </Text>
            <br />
            <Text
              mb="9"
              fontFamily={"Poppins"}
              fontstyle="normal"
              fontweight="400"
              fontsize="20px"
              line-height="37px"
              color="black"
            >
              {"Tether to Kenyan shilling"}
            </Text>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                borderRadius="20px"
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                color={"white"}
                bg={"black"}
                _hover={{ bg: "black" }}
              >
                Try it Out
              </Button>
            </Stack>
          </Flex>
        </HStack>
        <HStack mb={10} flexDirection={{ base: "column", md: "row" }}>
          <Flex
            // w={isLargerThanLG ? "full" : "60%"}
            flexDirection="column"
            // ml={isLargerThanLG ? "0" : "7"}
            w={["250px", "362px", "690px"]}
          >
            <Heading
              as={"h3"}
              size="2xl"
              fontFamily={"Poppins"}
              fontstyle="normal"
              fontweight="500"
              fontsize="50px"
              line-height="76px"
              w={["250px", "362px", "628px"]}
              mb="6"
            >
              {"Tons of features just in one single App."}
            </Heading>

            <Text
              mb="3"
              fontFamily={"Poppins"}
              fontstyle="normal"
              fontweight="400"
              fontsize="20px"
              line-height="37px"
              color="black"
            >
              {"Many features that will help you pay easily"}
            </Text>

            <List
              mb={9}
              fontFamily={"Poppins"}
              fontstyle="normal"
              fontweight="400"
              fontsize="20px"
              line-height="37px"
              w={["250px", "362px", "589px"]}
              color="black"
            >
              <ListItem>
                <ListIcon as={FaCheckCircle} color="#D9D9D9" />
                Fast transactions Buy crypto and see it in your wallet
                instantly.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="#D9D9D9" />
                Pay for services on the go. Flexibility to use whichever payment
                method works best for you.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="#D9D9D9" />
                Industry-leading security features. You and only you, have
                complete control over your crypto.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="#D9D9D9" />
                Track your business. with the best panel, track transactions on
                a registered business account.
              </ListItem>
            </List>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                borderRadius="20px"
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                color={"white"}
                bg={"black"}
                _hover={{ bg: "black" }}
              >
                Explore more
              </Button>
            </Stack>
          </Flex>
          <Spacer />
          <Flex
            // w={isLargerThanLG ? "full" : "40%"}
            // mb={isLargerThanLG ? "6" : "0"}
            justify={"center"}
            align={"center"}
            // position={'relative'}
            w={{ base: "435px", md: "731px" }}
            p="5"
            mt={{ base: 10, md: 10 }}
          >
            <Image
              fit={"cover"}
              align={"center"}
              w={{ base: "400px", md: "731px" }}
              // w={['250px','400px','589px']}
              mt={{ base: 10, md: "none" }}
              h={"100%"}
              src={tons}
              alt="Chakra Team"
            />
          </Flex>
        </HStack>
        <HStack flexDirection={{ base: "column", md: "row" }}>
          <Flex
            // w={isLargerThanLG ? "40%" : "full"}
            // mb={isLargerThanLG ? "0" : "6"}

            alignItems="center"
            justifyContent="center"
            w={{ base: "100%", md: "731px" }}
          >
            <Image
              fit={"cover"}
              align={"center"}
              // w={'90%'}
              h={"100%"}
              src={features}
              alt="Chakra Team"
              w="full"
            />
          </Flex>

          <Spacer />

          <Flex
            // w={isLargerThanLG ? "60%" : "full"}
            flexDirection="column"
            // ml={isLargerThanLG ? "7" : "0"}
            w={{ base: "362px", md: "694px" }}
          >
            <Image
              // align={'left'}
              // w={'90%'}
              // h={'100%'}
              src={arrow}
              alt="Arrow"
              // color={useColorModeValue('gray.800', 'gray.300')}
              w={{ base: "124px", md: "190px" }}
              // display={{ base:'none',md: '' }}
              //  position={'absolute'}
              ml={{ base: "none", md: "-71" }}
              mt={{ base: "none", md: "-400" }}
            />
            <Heading
              as={"h3"}
              size="2xl"
              fontFamily={"Poppins"}
              fontstyle="normal"
              fontweight="500"
              fontsize="50px"
              line-height="61px"
              w={{ base: "362px", md: "694px" }}
              mb="6"
            >
              {"Tons of benefits for the business user."}
            </Heading>

            <Text
              mb="9"
              fontFamily={"Poppins"}
              fontstyle="normal"
              fontweight="400"
              fontsize="20px"
              line-height="37px"
              w={{ base: "362px", md: "694px" }}
              color="black"
            >
              {
                "Manage payments and allow users to tip and share payments with Tether. Maintain regular customers who operate on the go."
              }
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                borderRadius="22"
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                color={"white"}
                bg={"black"}
                _hover={{ bg: "black" }}
              >
                See more
              </Button>
            </Stack>
          </Flex>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Services;
