import logo from "../../../assets/images/logo.png";
import "../../../App.css";
import Hero from "../../../components/Hero";
import About from "../../../components/About";
import Partners from "../../../components/Partners";
import Nav from "../../../components/Nav";
import Newsletter from "../../../components/Newsletter";
import Footer from "../../../components/Footer";
import { Flex, Box, Text, Center, VStack, Heading } from "@chakra-ui/react";
// import Carousel from "./components/Carousel";
// import Features from "./components/Features";
import Services from "../../../components/Services";

import Reviews from "../../../components/Reviews";
import Benefits from "../../../components/Benefits";
import Stats from "../../../components/Stats";

function LandingPage() {
  return (
    <Box bg="#F8F8F8" maxW={"100%"}>
      <Nav />
      <Hero />
      <Stats />
      <Center>
        <Text
          fontFamily={"Poppins"}
          fontSize={["16px", "25px"]}
          align={"center"}
          fontWeight="500"
          color="black"
          mt={"100px"}
          w={["271px", "878px"]}
        >
          Join the waitlist with other 100+ ambitious people across Africa
        </Text>
      </Center>

      <Partners />
      {/* <Carousel /> */}
      <Flex
        paddingTop="10"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          fontSize={["28px", "48px", "50px"]}
          align={"center"}
          fontFamily={"Poppins"}
          fontWeight={"500"}
        >
          Seamless Process.
        </Heading>
        <Heading
          fontSize={["28px", "48px", "50px"]}
          align={"center"}
          fontFamily={"Poppins"}
          fontWeight={"500"}
        >
          Flawless experience.
        </Heading>
        <Text
          fontSize="20px"
          align={"center"}
          fontFamily={"Poppins"}
          fontWeight={"400"}
          mt={5}
          color="black"
          lineHeight={"37px"}
          w={["300px", "450px", "650px"]}
        >
          Providing you with the most seamless process you can imagine for
          exchanging crypto or tokens on Cryptip
        </Text>
      </Flex>
      <About />
      <Center>
        <Benefits />
      </Center>

      <VStack>
        <Services />

        <Reviews />
        <Newsletter />
        <Footer />
      </VStack>
    </Box>
  );
}

export default LandingPage;
