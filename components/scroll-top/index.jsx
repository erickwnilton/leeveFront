"use client"

import React, { useState, useEffect } from "react";

import {
  Box,
  Button
} from "@chakra-ui/react";

import {
  ArrowUpIcon
} from "@chakra-ui/icons";

export function ScrolltopButton({ positionValue, backgroundValue, bottomValue, rightValue, indexValue }) {
  const [isVisible, setIsVisible] = useState(false);

  function handleScroll() {
    setIsVisible(window.scrollY > 300);
  }


  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])


  return (
    <Box>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          position={positionValue}
          background={backgroundValue}
          bottom={bottomValue}
          right={rightValue}
          zIndex={indexValue}
        >

          <ArrowUpIcon />

        </Button>
      )}
    </Box>
  )

}