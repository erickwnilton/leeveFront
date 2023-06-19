"use client"

import Image from "next/image";

import {
  Box,
  Flex,
  Text,
  Button,
  Container,
} from "@chakra-ui/react";

export function Main() {
  return (
    <Container
      maxWidth={1500}
      paddingTop={90}
    >

      <Flex
        display={["column", "column", "flex", "flex"]}
      >

        <Box
          background={"#F6FFDF"}
          width={["100%", "100%", "100%", "40%"]}
          height={["600px", "500px", "500px", "700px"]}
        >

          <Box
            marginTop={["10px", "20px", "20px", "80px"]}
          >
            <Text
              fontSize={"6xl"}
              color={"#3D221B"}
            >
              O App que <br />
              facilita sua <br />
              rotina.
            </Text>

            <Text
              fontSize={"2xl"}
              marginTop={"10px"}
              color={"#3D221B"}
            >
              Gerencie seu empreendimento de forma <br />
              simples e planejada.
            </Text>
          </Box>

          <Button
            width={200}
            height={50}
            marginTop={"20px"}
            background={"#12C793"}
            color={"#fff"}
            fontSize={30}
          >
            <a href="#links">Saiba mais</a>
          </Button>

        </Box>

        <Box
          width={["100%", "100%", "100%", "70%"]}
          height={["300px", "300px", "300px", "700px"]}
          marginTop={["50px", "50px", "50px", "0px"]}
        >
          <Image
            src="/mac.svg"
            width={1000}
            height={1000}
            alt="image"
          />

        </Box>

      </Flex>

    </Container>
  )
}