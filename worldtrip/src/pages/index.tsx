import { Center, Divider, HStack, Stack, VStack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { TripLinks } from '../components/TripLinks'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Stack spacing={0}>
      <Header />
      <VStack spacing={120}>
        <Banner srcImage='/images/background.png' />
        <TripLinks />
        <Center height='90px' width="90px">
          <Divider orientation='horizontal' borderBottomWidth={2} borderColor="dark.300" opacity={1}/>
        </Center>
      </VStack>
      <VStack color="dark.300">
          <Text fontSize="5xl">Vamos nessa?</Text>
          <Text fontSize="4xl">Então escolha seu continente</Text>
      </VStack>
    </Stack>
  )
}
