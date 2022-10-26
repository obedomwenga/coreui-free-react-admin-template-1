import React, { ReactNode } from "react";
import Downloadnow from "../assets/images/download.svg";
import "@fontsource/poppins";
import {
  Text,
  VStack,
  Image,
  Flex,
  Divider,
  Box,
  Heading,
  useColorModeValue,
  Container,
  Stack,
  HStack,
  VisuallyHidden,
  chakra,
  Spacer,
  Center,
} from "@chakra-ui/react";
import CustomBtn from "./CustomBtn";
import Logo from "../assets/images/logo.png";
import {
  FaInstagram,
  FaTwitter,
  FaGooglePlus,
  FaFacebookF,
  FaDiscord,
  FaLinkedin,
} from "react-icons/fa";

const SocialButton = ({ children, label, href }: { children: ReactNode }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <Box bg="black" w="100%">
      <Center>
        <VStack w="80%">
          <HStack
            w="100%"
            flexDirection={{ base: "column", md: "row" }}
            paddingTop="10"
            paddingBottom="10"
            spacing={{ base: "5", md: "" }}
          >
            <Flex
              direction="column"
              flexWrap="wrap"
              spacing={{ base: 5, md: "10" }}
              mb={{ base: "25px", md: "" }}
            >
              <Heading
                as="h3"
                w={{ base: "350px", md: "500px" }}
                color={"white"}
              >
                Download our app for free today.
              </Heading>
              <Text
                flex="1"
                flexWrap="wrap"
                fontSize={{ base: "16px", md: "18px" }}
                color="rgba(220, 220, 220, 0.81)"
                fontFamily={"Inter"}
                w={{ base: "350px", md: "477px" }}
              >
                Exchange your crypto seamlessly, and pay for whatevery you need
                in any Cryptip supporting joints.
              </Text>
            </Flex>
            <Spacer />
            <Flex direction="column" align={"left"}>
              <Image align={"left"} height="50" src={Downloadnow} />

              <Text
                flexWrap="wrap"
                fontSize="18px"
                color="white"
                fontFamily={"Inter"}
              >
                Available both on the Appstore and Playstore
              </Text>
            </Flex>
          </HStack>
          <Divider marginTop="5" />
          {/* <Flex direction="row" pt="40px" align={"left"}> */}
          <HStack
            w="100%"
            paddingTop="10"
            paddingBottom="10"
            flexDirection={{ base: "column", md: "row" }}
            spacing={{ base: "5", md: "250" }}
          >
            <Flex direction="column" mb={{ base: "10", md: "" }}>
              <Flex direction="row" alignSelf="self-start">
                <Image
                  height="50px"
                  width="50px"
                  src={Logo}
                  alt="Logo"
                  p={""}
                />
                <Heading color={"white"} pl={"2"}>
                  Cryptip
                </Heading>
              </Flex>
              <Text color="white" fontFamily={"Inter"}>
                Support is just a few taps away. Get your questions answered by
                using our help library.
              </Text>
            </Flex>
            <Flex direction="row" alignSelf="self-start">
              <Flex flex="1" direction="column">
                <Text color="white" fontFamily={"Inter"}>
                  Product
                </Text>
                <Text color="white" fontFamily={"Inter"}>
                  Wallet FAQ
                </Text>
                <Text color="white" fontFamily={"Inter"}>
                  Extension
                </Text>
                <Text color="white" fontFamily={"Inter"}>
                  Buy Crypto
                </Text>
                <Text color="white" fontFamily={"Inter"}>
                  Pay
                </Text>
              </Flex>
              <Flex flex="1" direction="column">
                <Text color="white" fontFamily={"Inter"}>
                  Support
                </Text>
                <Text color="white" fontFamily={"Inter"}>
                  Company
                </Text>
                <Text color="white" fontFamily={"Inter"}>
                  Help
                </Text>
                <Text color="white" fontFamily={"Inter"}>
                  Terms and Conditions
                </Text>
                <Text color="white" fontFamily={"Inter"}>
                  Security
                </Text>
              </Flex>
            </Flex>
          </HStack>
          <Divider marginTop="5" />
          <Box w="100%" paddingTop="10" paddingBottom="10">
            <Container
              as={Stack}
              maxW={"6xl"}
              py={4}
              direction={{ base: "column", md: "row" }}
              spacing={4}
              justify={{ base: "left", md: "space-between" }}
              align={{ base: "center", md: "left" }}
              color="white"
            >
              <Stack
                justify={{ base: "left", md: "space-between" }}
                align={{ base: "center", md: "left" }}
              >
                <Text>Copyright © 2022 Cryptip.</Text>

                <Text>All rights reserved | Privacy Policy | T&Cs</Text>
              </Stack>

              <Stack direction={"row"} spacing={6} position="right">
                <SocialButton label={"Google"} target="_blank" href={"https://theafricablockchaincenter.com/"}>
                  <FaGooglePlus />
                </SocialButton>
                <SocialButton label={"LinkedIn"} href={"https://www.linkedin.com/company/africa-blockchain-center/"}>
                  <FaLinkedin />
                </SocialButton>
                <SocialButton label={"Twitter"} href={"https://twitter.com/theabcafrica?s=20&t=I8JrWZqRmhFKj6ZfZwOlzw"}>
                  <FaTwitter />
                </SocialButton>

                <SocialButton label={"Discord"} href={"https://discord.com/invite/x2Ef4g6Jfq"}>
                  <FaDiscord />
                </SocialButton>
              </Stack>
            </Container>
          </Box>
        </VStack>
      </Center>
    </Box>
  );
};
export default Footer;
