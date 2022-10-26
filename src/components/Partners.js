import React from "react";
import { HStack, Img, Box } from "@chakra-ui/react";
import Pizza from "../assets/images/pizza.png";
import Carre from "../assets/images/carre.png";
import StopShop from "../assets/images/stopshop.png";
import Java from "../assets/images/java.png";

export default function Partners() {
  return (
    <Box maxWidth="100%" borderRadius="39px" bg="white" p="9" m={"5"}>
      <HStack>
        <Img w={"25%"} src={Pizza} alt="Pizza Hut" />
        <Img w={"25%"} src={Carre} alt="Carrefour" />
        <Img w={"25%"} src={StopShop} alt="StopShop" />
        <Img w={"25%"} src={Java} alt="Java" />
      </HStack>
    </Box>
  );
}
