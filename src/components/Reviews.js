import React, { useState } from "react";

import people from "../utils/data";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaGooglePlusG,


} from "react-icons/fa";
import { Text, Center, Flex, Avatar, AvatarBadge, AvatarGroup, Icon } from "@chakra-ui/react";
import "@fontsource/poppins";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkArrayLength = (personNumber) => {
    if (personNumber > people.length - 1) {
      return 0;
    }
    if (personNumber < 0) {
      return people.length - 1;
    }
    return personNumber;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkArrayLength(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkArrayLength(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkArrayLength(randomNumber));
  };

  return (
    <Center marginBottom="3">

      <article className="review" id="reviews">
        <div className="img-container" >
          {/* <img src={image} alt={name} className="person-img" /> */}
          <AvatarGroup size='2xl' max={3} align='center'>
            <Avatar src={image} className="person-img">
              <AvatarBadge boxSize='1.1em' bg='white'  >
                <Icon as={FaGooglePlusG} />
              </AvatarBadge>
            </Avatar>
          </AvatarGroup>
        </div>
        <Flex direction="row" pt='30px'>
          <button onClick={prevPerson} className="prev-btn">
            <FaChevronCircleLeft color="white" fontFamily={"Poppins"} />
          </button>
          <Center marginLeft='10' marginRight='10'>  <Text color="white" padding="1" fontFamily={"Poppins"} fontstyle='normal'
            fontweight='500'
            fontsize='26px'
            line-height='37px'
            text-align='center'>
            {text}
          </Text></Center>

          <button onClick={nextPerson} className="next-btn">
            <FaChevronCircleRight color="white" fontFamily={"Poppins"} />
          </button>
        </Flex>
        <Text color="white" padding="1" fontFamily={"Poppins"} pt='10'
          fontstyle='normal'
          fontweight='500'
          fontsize='22px'
          line-height='18px'
          /* or 129% */

          text-align='center'
        >
          {name}
        </Text>
        <Text color="white" padding="1" fontFamily={"Poppins"}

          fontstyle='normal'
          fontweight='400'
          fontsize='19px'
          line-height='19px'
          text-align='center'
        >
          {job}
        </Text>
        {/* <div className="semicircle"></div> */}
      </article>
    </Center>
  );
};

export default Reviews;
