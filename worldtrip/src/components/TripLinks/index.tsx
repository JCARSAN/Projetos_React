import { Flex, HStack, VStack, Text } from "@chakra-ui/react";

export function TripLinks(){
    return(
        <HStack
            width="100%"
            maxWidth="1160px"
            ml="auto"
            mr="auto"
            alignItems="center"
            justifyContent="space-between"
            marginTop="50px"
        >
            <VStack>
                <img src="/images/cocktail.png" alt="Vida Noturna"  />
                <Text fontSize="xl">Vida Noturna</Text>
            </VStack>
            <VStack>
                <img src="/images/surf.png" alt="Praia"  />
                <Text fontSize="xl">Praia</Text>
            </VStack>
            <VStack>
                <img src="/images/building.png" alt="Cidades Modernas"  />
                <Text fontSize="xl">Moderno</Text>
            </VStack>
            <VStack>
                <img src="/images/museum.png" alt="Cidades Clássicas"  />
                <Text fontSize="xl">Clássico</Text>
            </VStack>
            <VStack>
                <img src="/images/earth.png" alt="Mais"  />
                <Text fontSize="xl">e mais..</Text>
            </VStack>
        </HStack>
    )
}