import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export function Header(){
    return(
        <Flex width="100%"
             alignItems="center"
             justifyContent="center"
             height="100px"
             bg="light.500"
        >
            <img src="/images/logo.png" alt="Logo" />
        </Flex>
    )
}