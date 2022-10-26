// import {
//   Box,
//   Button,
//   Flex,
//   Img,
//   Spacer,
//   Text,
//   useMediaQuery,
//   HStack,
//   VStack,
//   Divider,
// } from "@chakra-ui/react";
// import React from "react";
// import "@fontsource/poppins";
// //  import chakraHero from '../assets/chakraHero.jpg';
// import HeroImage from "../assets/images/hero.svg";

// const Hero = () => {
//   const [isLargerThanLG] = useMediaQuery("(min-width: 62em)");

//   return (
//     // <Flex
//     //   w="100%"
//     //   px={isLargerThanLG ? "16" : "6"}
//     //   py="16"
//     //   minHeight="90vh"
//     //   flexDirection={isLargerThanLG ? "row" : "column"}
//     // >
//     <HStack p="10"
//     mr={isLargerThanLG ? "6" : "0"}
//     w={isLargerThanLG ? "full" : "full"}>
//         <VStack justifyContent="left" alignItems="left">
//           <Text
//             textAlign="left"
//             // fontSize={isLargerThanLG ? "5xl" : "4xl"}
//             fontWeight="1000"
//             fontFamily={"Poppins"}
//             mb="4"
//             m={''}
//             fontSize='65px'
//             // position='absolute'
//             height={'200px'}
//             left='5%'
//             // right=' 60.63%'
//             top=' 100px'
//             w='592px'
//             // position={'relative'}
//           >
//             Your Day-to-day Online Wallet
//           </Text>

//           <Text
//             mb="5"
//             fontFamily={"Poppins"}
//             fontSize={isLargerThanLG ? "lg" : "base"}
//             // position='relative'
//             paddingBottom="20px"
//             width= '600px'
//             height= '137.84px'
//             left= '87.71px'
//             top= '507.97px'

//             font-style= 'normal'
//             font-weight= '400'
//             font-size= '20px'
//             line-height= '37px'
//             /* or 183% */

//             color= '#000000'
//           >
//             Pay for your meals, vacation and products with a seamless swipe.
//             With cryptic, payment and tipping is now a breeze. Tap the download
//             banner to explore and experience the vibe of swipe.
//           </Text>

//           <Button
//             align="left"

//             bg={"black"}
//             color={"white"}
//             borderRadius='22.1695px'
//             w="195.67px"
//             colorScheme="black"
//             variant="solid"
//             h="74.22px"
//             size={isLargerThanLG ? "lg" : "md"}
//             mb={isLargerThanLG ? "0" : "10"}
//             onClick={(e) => {
//               e.preventDefault();
//               window.location.href = "#";
//             }}

//           >
//             Get Started
//           </Button>
//         </VStack>
//         <Img src={HeroImage} alt="Chakra UI" />
//     </HStack >
//     // </Flex>
//   );
// };

// export default Hero;

import {
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import "@fontsource/poppins";
//  import chakraHero from '../assets/chakraHero.jpg';
import HeroImage from "../assets/images/hero.png";
import Stats from "./Stats";

export default function CallToActionWithVideo() {
  return (
    <Stack
      p={"10"}
      align={"center"}
      spacing={{ base: 8, md: 10 }}
      // py={{ base: 20, md: 10 }}
      direction={{ base: "column", md: "row" }}
    >
      <Stack spacing={{ base: 5, md: 10 }} mt={{ base: 1, md: -300, lg: -300 }}>
        <Heading
          lineHeight={"62px"}
          fontWeight={700}
          fontSize={{ base: "42px", sm: "4xl", lg: "6xl" }}
          fontFamily="Poppins"
        >
          <Text fontSize={{ base: "42px", sm: "4xl", lg: "6xl" }}>
            Your Day-to-day Online Wallet
          </Text>
        </Heading>
        <Text
          color={"black"}
          width={{ base: "306px", md: "659px" }}
          fontSize={20}
          lineHeight="37px"
          fontWeight={400}
          fontFamily="Poppins"
        >
          Pay for your meals, vacation and products with a seamless swipe. With
          cryptip, payment and tipping is now a breeze. Tap the download banner
          to explore and experience the vibe of swipe.
        </Text>
        <Stack>
          <Button
            borderRadius="22"
            size={"lg"}
            fontWeight={"normal"}
            px={6}
            colorScheme={"black"}
            bg={"black"}
            w="195px"
            h="74px"
            _hover={{ bg: "black" }}
          >
            Get started
          </Button>
        </Stack>
      </Stack>
      <Flex
        // flex={1}
        justify={"center"}
        align={"center"}
        // position={'relative'}
        w={{ base: "100%", md: "100%" }}
      >
        <Image
          alt={"Hero Image"}
          fit={"cover"}
          align={"center"}
          w={"100%"}
          h={"100%"}
          src={HeroImage}
        />
      </Flex>
    </Stack>
  );
}
