import { Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";

interface BannerProps {
    srcImage: string;
}

export function Banner({ srcImage }: BannerProps){
    return(
        <Flex
            w="100%"
            height={335}
            position="relative"
            alignItems="center"
            justifyContent="center"
            backgroundImage={`url(${srcImage})`}
            backgroundSize="cover"
        >
            <HStack 
                position="relative"
                width="100%"
                maxWidth={1160}
                justifyContent="space-between"
                alignItems="center"
                bottom={0}
            >
                <Stack 
                    left={150}
                    color="light.500"
                >
                    <Text fontSize="3xl">5 Continentes</Text>
                    <Text fontSize="3xl">Infinitas possibilidades</Text>
                    <Text fontSize="xl">Chegou a hora de tirar do papel a viagem que você sempre sonhou</Text>
                </Stack>
                <Image
                    position="absolute"
                    right={0}
                    bottom={-130}
                    boxSize="300px"
                    src="/images/airplane.png"
                    alt="Avião"
                />                
            </HStack>
        </Flex>
    )
}