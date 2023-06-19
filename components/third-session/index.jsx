"use client"

import Image from "next/image";

import {
  Box,
  Flex,
  Container
} from "@chakra-ui/react";

export function Third() {
  return (
    <Container
      height={"100%"}
      maxWidth={1500}
      background={"#8BD93D"}
      id="third-page"
    >
      <Flex
        display={["column", "column", "flex", "flex"]}
      >

        <Box
          marginTop={["0px", "0px", "0px", "50px"]}
        >
          <Image
            src="/mac2.svg"
            width={1000}
            height={1000}
            alt="image"
          />
        </Box>

        <Box
        paddingBottom={5}
        >
          <Image
            src="/text.svg"
            width={500}
            height={500}
            alt="image"
          />
        </Box>

      </Flex>
    </Container>
  )
}