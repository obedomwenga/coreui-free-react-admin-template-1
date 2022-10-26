import { Text, HStack, VStack, useMediaQuery, Flex, Divider, Heading,Stack } from "@chakra-ui/react";
import "@fontsource/poppins";



export default function Stats() {
  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
  return (

     <Flex 
     direction="row" 
     width={{base: '200px', md: '639px'}}
     height='154px'
    //  left={'120px'}
     top={'953px'}
    //  pl= '90'
     mt={{ base: 0, md: -320}}
     ml={{base: '10', md: '10'}}
     p='4'
     >

          <HStack >
            <VStack align='left'>
              <Heading as={'span'} fontFamily={"Raleway"} fontSize="50" align='start'>
                <HStack spacing={0} ><Text as={'sub'}>$</Text><Text>0</Text></HStack>
              </Heading>
              <Text fontFamily={"Poppins"} fontSize="16px"
              fontWeight={'400'} 
              lineHeight={['11px','21px']}
              w= {{base: '143px', md: '250px'}}>
                Absolutely free to use in any transaction for your daily needs
              </Text>
            </VStack>
            
            <Divider orientation="vertical" ml="15" pr="5" colorScheme={"blackAlpha"}/>
            <VStack align='left'>
              {/* <Text fontFamily={"Raleway"} fontSize="50">
              3K+
              </Text> */}
              <Heading as={'span'} fontFamily={"Raleway"} fontSize="50" d>
                <HStack spacing={0}><Text >3</Text><Stack flexDirection={'row'} as={'sub'}><Text>K</Text><Text as={'sup'}>+</Text></Stack></HStack>
              </Heading>
              <Text fontFamily={"Poppins"} fontSize="16px"
              fontWeight={'400'} 
              lineHeight={['11px','21px']}
              w= {{base: '143px', md: '250px'}}>
              Users already registered and signup to our waitlist.Join this
                game changing opportunity
              </Text>
            </VStack>
            
          </HStack>
        </Flex>
  );
}
