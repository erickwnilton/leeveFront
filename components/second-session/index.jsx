"use client"

import Image from "next/image";

import {
  Box,
  Text,
  Grid,
  GridItem,
  Container
} from "@chakra-ui/react";

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
          <Grid
            gap={6}
            templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
            flexDirection={["column", "column", "column", "flex"]}
          >

            <GridItem>

              <Box
                width={["50%", "50%", "50%", "100%"]}
                margin={"auto"}
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
                width={["50%", "50%", "50%", "100%"]}
                margin={"auto"}
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
                width={["50%", "50%", "50%", "100%"]}
                margin={"auto"}
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
        </Box>

      </Box>

    </Container>
  )
}