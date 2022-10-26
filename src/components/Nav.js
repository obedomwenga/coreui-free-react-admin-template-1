// import React, { useState } from "react";
// import {
//   Image,
//   Text,
//   Flex,
//   Spacer,
//   IconButton,
//   useColorMode,
//   useColorModeValue,
//   useMediaQuery,
// } from "@chakra-ui/react";
// import { MoonIcon, SunIcon } from "@chakra-ui/icons";
// import { FaAlignJustify } from "react-icons/fa";
// import { Icon } from "@chakra-ui/react";
// import Logo from "../assets/images/logo.png";
// import "@fontsource/poppins";
// import CustomBtn from "./CustomBtn";

// const Nav = ({ onOpen, ref }) => {
//   const [scroll, setScroll] = useState(false);
//   const { colorMode, toggleColorMode } = useColorMode();
//   const navBg = useColorModeValue("white", "blackAlpha.200");
//   const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");

//   const changeScroll = () =>
//     document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
//       ? setScroll(true)
//       : setScroll(false);

//   window.addEventListener("scroll", changeScroll);

//   return (
//     <Flex
//       h="10vh"
//       alignItems="center"
// p="6"
// boxShadow={scroll ? "base" : "none"}
// position="sticky"
// top="0"
// zIndex="sticky"
//       w="full"
//       bg={navBg}
//     >
//       <Flex direction="row" justifyContent="center" alignItems="center">
//         <Image src={Logo} ml='10' />

//         <Text p=''fontSize="36px" fontWeight="700" fontFamily={"Poppins"} m='4'>
//           Cryptip
//         </Text>
//       </Flex>
//       <Spacer />

//       <Flex alignItems="center">
//       <Flex direction="row" justifyContent="space-between">
//         {/* <Text marginRight='2'marginLeft='2' fontSize="xl" fontWeight="bold" fontFamily={"Poppins"}>
//           Exchange
//         </Text>
//         <Text marginRight='2'marginLeft='2' fontSize="xl" fontWeight="bold" fontFamily={"Poppins"}>
//           Crypto
//         </Text>
//         <Text marginRight='2'marginLeft='2' fontSize="xl" fontWeight="bold" fontFamily={"Poppins"}>
//           Market
//         </Text> */}
//       </Flex>

//         {isLargerThanMD ? (
//           <>
//              <CustomBtn bgColor='transparent' text='Features' type={'link'} />
//              <CustomBtn bgColor='transparent' text='Crypto' />
//              <CustomBtn bgColor='White' text='Reviews' />
//              <CustomBtn bgColor='grey' text='Sign Up' />
//           </>
//         ) : (
//           <IconButton ref={ref} onClick={onOpen}>
//             <Icon as={FaAlignJustify} />
//           </IconButton>
//         )}
//       </Flex>
//     </Flex>
//   );
// };

// export default Nav;

import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaAlignJustify } from "react-icons/fa";
import Logo from "../assets/images/logo.png";
import "@fontsource/poppins";
import AdminLogin from "../views/pages/login/AdminLogin";
// import Benefits from "./Benefits";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const navBg = useColorModeValue("white", "blackAlpha.200");
  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");

  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener("scroll", changeScroll);

  return (
    <Box
      boxShadow={scroll ? "base" : "none"}
      position="sticky"
      top="0"
      zIndex="sticky"
      bg={navBg}
    >
      <Flex
        bg={useColorModeValue("#F8F8F8", "#F8F8F8")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("#F8F8F8", "white")}
        align={"center"}
        zIndex="sticky"
        boxShadow={scroll ? "base" : "none"}
      >
        <Flex
          flex={{ base: 1, md: "start" }}
          justify={{ base: "start", md: "start" }}
        >
          <Image
            src={Logo}
            ml="10"
            w={51}
            h={51}
            top="57"
            // left={94}
            // left='5%'
            // right={'91%'}
            // position='relative'
          />
          <Text
            textAlign={useBreakpointValue({ base: "left", md: "left" })}
            fontFamily={"Poppins"}
            color={useColorModeValue("#45389B", "#45389B")}
            fontSize="33px"
            fontWeight="700"
            ml="2"
          >
            Cryptip
          </Text>
        </Flex>
        <Flex display={{ base: "none", md: "flex" }} ml={5} mr="90">
          <DesktopNav />
        </Flex>

        <Flex
          flex={{ base: "flex-end", md: "auto" }}
          ml={{ base: 0 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"outline"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("black", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link 
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"24px"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
      <Stack
        flex={{ base: 1, md: 0 }}
        justify={"flex-end"}
        direction={"row"}
        pl="20"
        spacing={1}
      >
        {/* <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Sign In
          </Button> */}
        {/* <Link
        > */}
          <Button
            as={LinkRoute} to='/adminlogin'
            display={{ base: "inline-flex", md: "inline-flex" }}
            fontSize={"17px"}
            fontWeight={600}
            color={"black"}
            bg={"#E1E1E1"}
            // href={"#adminlogin"}
            w="108px"
            borderRadius={"96px"}
            _hover={{
              bg: "pink.300",
            }}
          >
            Join
          </Button>
        {/* </Link> */}
      </Stack>
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("#f8f8f8", "gray.800")}
      p={4}
      align=""
      display={{ base: "", md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        alignItems={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          alignContent={"center"}
          fontWeight={600}
          color={useColorModeValue("black", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            // transition={'all .25s ease-in-out'}
            // transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"center"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: String;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Features",
    href: "#about",
  },
  {
    label: "Crypto",
    href: "#services",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
];
