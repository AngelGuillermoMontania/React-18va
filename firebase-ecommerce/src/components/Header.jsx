import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <Flex
      justifyContent="space-between"
      px="10px"
      bgGradient="linear(to-l, #a9ad27, #bebebf)"
      h="6rem"
      boxShadow="dark-lg"
      pos="fixed"
      w="100vw"
      zIndex="9999"
      alignItems="center"
    >
      <Flex textAlign="center" justifyContent="space-between">
        <Image src={logo} alt="not found" w="5rem" />
        <Text fontSize="2em" fontWeight="900">
          CalzADAS
        </Text>
      </Flex>
      <Flex w="50%" justifyContent="space-between" alignItems="center">
        <Text fontWeight="500">Deportivas</Text>
        <Text fontWeight="500">Urbanas</Text>
        <Text fontWeight="500">Zapatos</Text>
      </Flex>
      <Box></Box>
    </Flex>
  );
}
