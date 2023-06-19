"use client"

import Link from "next/link";

import {
  IBM_Plex_Serif
} from "next/font/google";

import {
  Button
} from "@chakra-ui/react";

const ibm = IBM_Plex_Serif({
  style: ['normal'],
  weight: ['400'],
  subsets: ['latin']
})

export function ButtonisOpen() {
  return (
    <Button
      className={ibm.className}
      width={200}
      height={50}
      background={"#12C793"}
      color={"#fff"}
      fontSize={30}
    >
      <Link href="">
        Entrar
      </Link>
    </Button>
  )
}

