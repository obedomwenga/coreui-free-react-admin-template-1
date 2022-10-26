// import {
//   Flex,
//   Spacer,
//   Text,
//   useMediaQuery,
//   Image,
//   Box,
//   Circle,
//   Heading,
//   Button,
//   VStack,
//   HStack
// } from "@chakra-ui/react";
// import { Icon } from "@chakra-ui/react";
// import { FaHandshake, FaStar } from "react-icons/fa";
// import React from "react";
// import CustomBtn from "./CustomBtn";
// import "@fontsource/poppins";
// import asset from "../assets/images/assets.svg";
// import track from "../assets/images/track.svg";
// import lock from "../assets/images/lock.svg";

// const About = () => {
//   const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
//   const array = [
//     {
//       id: 1,
//       header: "Easily access your wallet",
//       text: "Sign up to spend your crypto like cash, shop directly with thousands of merchants that accept cryptic and buy gift cards and give tips with crypto directly from your wallet.",
//       icon: asset,
//       btntext: "Learn More",
//     },
//     {
//       id: 2,
//       header: "Easily access your assets",
//       text: "Your funds are our absolute top priority. That’s why, we’ve spent thousands of our time and money to get the best technology from trusted global solution providers.",
//       icon: lock,
//       btntext: "Learn More",
//     },
//     {
//       id: 3,
//       header: "Track your business",
//       text: "Track your business. With the best panel, track transactions on a registered business account. + get Constant review and testing of our platform",
//       icon: track,
//       btntext: "Learn More",
//     },
//   ];
//   return (
//     <Flex
//       minH="70vh"
//       alignItems="center"
//       justifyContent="center"
//       w="full"
//       py="16"
//       px={isLargerThanMD ? "16" : "6"}
//       flexDirection={isLargerThanMD ? "row" : "column"}
//     >
//       {array.map((arr) => (
//         <>

//           <Flex
//             height="300px"
//             bg="#ffffff"
//             width={isLargerThanMD ? "32%" : "full"}
//             shadow=""
//             p="6"
//             alignItems="left"
//             justifyContent="center"
//             borderRadius="19px"
//             flexDirection="column"
//             textAlign="center"
//             mb={isLargerThanMD ? "0" : "4"}
//             //border="1px solid #FFFF"
//             boxShadow={'xl'}
//           >
//             <Circle bg="gray.200" size="80px" mb='5px' >
//               <Image src={arr.icon} height="" width="" />
//             </Circle>

//             <Heading as="h4" size="md" align={"left"} fontFamily={"Poppins"}>
//               {arr.header}
//             </Heading>
//             <Text align={"left"} fontFamily={"Poppins"}
//               fontstyle='normal'
//               fontweight='400'
//               fontsize='20px'
//               line-height='31px'
//               color='black'
//               mb='5px'>
//               {arr.text}
//             </Text>
//             <CustomBtn radius='22px' size="160px" text={arr.btntext} />
//           </Flex>

//           <Spacer />

//         </>
//       ))}
//     </Flex>
//   );
// };

// export default About;

import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Button,
  useMediaQuery,
  Heading,
  Img,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import "@fontsource/poppins";
import asset from "../assets/images/assets.png";
import track from "../assets/images/track.png";
import lock from "../assets/images/lock.png";

// interface FeatureProps {
//   title: string;
//   text: string;
//   icon: ReactElement;
// }

// const Feature = ({ title, text, icon }: FeatureProps) => {
//   return (
//     <Stack>
//       <Flex
//         w={16}
//         h={16}
//         align={'center'}
//         justify={'center'}
//         color={'white'}
//         rounded={'full'}
//         bg={'gray.100'}
//         mb={1}>
//         {icon}
//       </Flex>
//       <Text fontWeight={600}>{title}</Text>
//       <Text color={'gray.600'}>{text}</Text>
//     </Stack>
//   );
// };

export default function SimpleThreeColumns() {
  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
  return (
    <Box
    className="about"
      id="about"
      p={4}
      alignItems="center"
      justifyContent="center"
      w="full"
      py="16"
      px={isLargerThanMD ? "16" : "6"}
      flexDirection={isLargerThanMD ? "row" : "column"}
    >
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
        {/* <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'Lifetime Support'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        /> */}
        <Stack>
          <Flex
            ml={6}
            p={3}
            w={16}
            h={16}
            align={"center"}
            justify={"center"}
            color={"white"}
            rounded={"full"}
            bg="#E6DDD0"
            mb={1}
          >
            {<Img src={lock} alt="Lock" w={10} h={10} />}
          </Flex>
          <Stack
            height=""
            bg="#F8F8F8"
            // width={isLargerThanMD ? "32%" : "full"}
            shadow=""
            p="6"
            alignItems="left"
            justifyContent="center"
            borderRadius="19px"
            flexDirection="column"
            textAlign="center"
            mb={isLargerThanMD ? "0" : "4"}
            //border="1px solid #FFFF"
            _hover={{ boxShadow: "xl", bg: "White" }}
          >
            <Heading as="h4" size="md" align={"left"} fontFamily={"Poppins"}>
              {"Easily access your wallet"}
            </Heading>
            <Text
              align={"left"}
              fontFamily={"Poppins"}
              fontstyle="normal"
              fontweight="400"
              fontsize="20px"
              line-height="31px"
              color="black"
              w={"363px"}
            >
              {
                "Sign up to spend your crypto like cash, shop directly with thousands of merchants that accept cryptic and buy gift cards and give tips with crypto directly from your wallet."
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
                color={"black"}
                bg={"#EBEBEB"}
                _hover={{ bg: "#E7EAED" }}
              >
                Learn more
              </Button>
            </Stack>
          </Stack>
        </Stack>

        {/* <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Unlimited Donations'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        /> */}

        <Stack>
          <Flex
            ml={6}
            p={3}
            w={16}
            h={16}
            align={"center"}
            justify={"center"}
            color={"white"}
            rounded={"full"}
            bg="#EFD7D7"
            mb={1}
          >
            {<Img src={asset} alt="Lock" w={10} h={10} />}
          </Flex>
          <Stack
            height=""
            bg="#F8F8F8"
            // width={isLargerThanMD ? "32%" : "full"}
            shadow=""
            p="6"
            alignItems="left"
            justifyContent="center"
            borderRadius="19px"
            flexDirection="column"
            textAlign="center"
            mb={isLargerThanMD ? "0" : "4"}
            //border="1px solid #FFFF"
            _hover={{ boxShadow: "xl", bg: "white" }}
          >
            <Heading as="h4" size="md" align={"left"} fontFamily={"Poppins"}>
              {"Easily access your assets"}
            </Heading>
            <Text
              align={"left"}
              fontFamily={"Poppins"}
              fontstyle="normal"
              fontweight="400"
              fontsize="20px"
              line-height="31px"
              color="black"
              w={"363px"}
            >
              {
                "Your funds are our absolute top priority. That’s why, we’ve spent thousands of our time and money to get the best technology from trusted global solution providers."
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
                color={"black"}
                bg={"#EBEBEB"}
                _hover={{ bg: "#E7EAED" }}
              >
                Learn more
              </Button>
            </Stack>
          </Stack>
        </Stack>
        {/* <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Instant Delivery'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        /> */}
        <Stack>
          <Flex
            ml={6}
            p={3}
            w={16}
            h={16}
            align={"center"}
            justify={"center"}
            color={"white"}
            rounded={"full"}
            bg="#DEE9F0"
            mb={1}
          >
            {<Img src={track} alt="track" w={10} h={10} />}
          </Flex>
          <Stack
            height=""
            bg="#F8F8F8"
            // width={isLargerThanMD ? "32%" : "full"}
            shadow=""
            p="6"
            alignItems="left"
            justifyContent="center"
            borderRadius="19px"
            flexDirection="column"
            textAlign="center"
            mb={isLargerThanMD ? "0" : "4"}
            //border="1px solid #FFFF"
            _hover={{ boxShadow: "xl", bg: "white" }}
          >
            <Heading as="h4" size="md" align={"left"} fontFamily={"Poppins"}>
              {"Track your business"}
            </Heading>
            <Text
              align={"left"}
              fontFamily={"Poppins"}
              fontstyle="normal"
              fontweight="400"
              fontsize="20px"
              line-height="31px"
              color="black"
              w={"363px"}
            >
              {
                "Track your business. With the best panel, track transactions on a registered business account. + get Constant review and testing of our platform"
              }
            </Text>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
              mt="100"
            >
              <Button
                borderRadius="22"
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                color={"black"}
                bg={"#EBEBEB"}
                _hover={{ bg: "#E7EAED" }}
              >
                Learn more
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Box>
  );
}
