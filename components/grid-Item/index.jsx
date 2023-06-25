"use client"

import Image from "next/image";

import {
  Box,
  Text,
  Grid,
  GridItem
} from "@chakra-ui/react";

export function GridColumn({ gapValue, templateColumnsValue, flexDirectionValue, widthBoxValue, marginValue }) {
  return (
    <Grid
      gap={gapValue}
      templateColumns={templateColumnsValue}
      flexDirection={flexDirectionValue}
    >

      <GridItem>

        <Box
          width={widthBoxValue}
          margin={marginValue}
        >
          <Image
            src="/box.svg"
            width={200}
            height={200}
            alt="caixa"
          />

          <Text
            fontSize={"2xl"}
            color={"#3D221B"}
          >
            Gerenciamento de <br />
            produto, caixa e <br />
            estoque.
          </Text>
        </Box>

      </GridItem>

      <GridItem>

        <Box
          width={widthBoxValue}
          margin={marginValue}
        >

          <Image
            src="/money.svg"
            width={200}
            height={200}
            alt="dinheiro"
          />

          <Text
            fontSize={"2xl"}
            color={"#3D221B"}
          >
            Controle de gastos <br />
            e lucros mensais.
          </Text>
        </Box>

      </GridItem>

      <GridItem>

        <Box
          width={widthBoxValue}
          margin={marginValue}
        >
          <Image
            src="/people.svg"
            width={200}
            height={200}
            alt="pessoas"
          />

          <Text
            fontSize={"2xl"}
            color={"#3D221B"}
          >
            Gestão e controle <br />
            de funcionários.
          </Text>
        </Box>

      </GridItem>

    </Grid>
  )
}