"use client"

import {
  Box,
  Text,
  Container
} from "@chakra-ui/react";

import { GridColumn } from "../grid-Item";

export function Second() {
  return (
    <Container
      maxWidth={1500}
      id="second-page"
      height={["1400px", "1400px", "900px", "800px"]}
    >

      <Box
        paddingTop={90}
      >

        <Box>
          <Text
            fontSize={"7xl"}
            color={"#8BD93D"}
          >
            Nosso serviço
          </Text>
        </Box>

        <Box
          margin={"auto"}
          maxWidth={1000}
          marginTop={["30px", "30px", "30px", "100px"]}
        >

          <GridColumn
            gapValue={["10", "10", "10", "40"]}
            templateColumnsValue={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
            flexDirectionValue={["column", "column", "column", "flex"]}

            widthBoxValue={["50%", "50%", "50%", "100%"]}
            marginValue={"auto"}
          />

        </Box>

      </Box>

    </Container>
  )
}