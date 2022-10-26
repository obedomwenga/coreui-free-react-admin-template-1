import React from "react";
import { Button,variant } from "@chakra-ui/react";
import "@fontsource/poppins";

export default function CustomBtn({ text, bgColor, size, type, color, radius }) {
  return size != null ? (
    <Button
      // align="left"
      // rounded={"full"}
      bg=  {bgColor === null ? 'white' : bgColor}
      // color={"white"}
      // boxShadow={
      //   "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
      // }
      // w="200px"
      // colorScheme="black"
      // variant="solid"
      // h="50px"
      
      // onClick={(e) => {
      //   e.preventDefault();
      //   window.location.href = "#";
      // }}
      borderRadius={radius}
      color={color}
      width={size}
      variant={type}
      fontFamily={"Poppins"}
    >
      {text}
    </Button>
  ) : (
    <Button 
    bg= {bgColor}
    // bg=  {bgColor === null ? bgColor : 'white'}
    fontFamily={"Poppins"}>{text}</Button>
  );
}





