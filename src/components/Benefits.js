import {
  Box,
  Image,
  Text,
  HStack,
  VStack,
  Heading,
  useMediaQuery,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import Smile from "../assets/images/smile.png";
import Send from "../assets/images/send.png";
import "@fontsource/poppins";

export default function Benefits() {
  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
  return (
    <Box
      className="benefits"
      id="benefits"
      borderRadius="39px"
      bg="#E7EAED"
      width={["300px", "450px", "1200px"]}
      padding={["5", "8", "10"]}
      marginTop="10"
      marginBottom="10"
    >
      <Flex flexDirection={isLargerThanMD ? "row" : "column"}>
        <HStack>
          <Image src={Send} marginTop="-100" p={"5"} />
          <VStack width={450}>
            <Heading
              as={"h2"}
              fontSize={["20px", "23px", "28px"]}
              fontFamily={"Poppins"}
              pb="4"
            >
              Efficient way to cover your daily basis needs
            </Heading>
            <Text
              fontFamily={"Poppins"}
              fontstyle="normal"
              fontweight="400"
              fontsize="16.1411px"
              line-height="21px"
            >
              An efective crypto app with processes, methods and offers to cover
              your daily payments in all supported joints
            </Text>
          </VStack>
        </HStack>
        <Spacer />
        <HStack pt={["5", "5", "0"]}>
          <Image src={Smile} marginTop="-100" p="5" />
          <VStack w={450}>
            <Heading
              as={"h2"}
              size="lg"
              fontFamily={"Poppins"}
              pb="4"
              font-weight="600"
            >
              With an easy to understand user interface
            </Heading>
            <Text
              fontFamily={"Poppins"}
              fontstyle="normal"
              fontweight="400"
              fontsize="16.1411px"
              line-height="21px"
            >
              Cryptic comes with a functional and easy to use interface that
              brushes off the complications of other coinbased apps.
            </Text>
          </VStack>
        </HStack>
      </Flex>
    </Box>
  );
}
