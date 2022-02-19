import { Flex, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Flex bgColor={"green.100"} flexDir="column" w={"100vw"} h={"100vh"}>
      <Heading textAlign={"center"} fontStyle={"normal"} fontWeight={"medium"} m={"10"}>Schemode: The virtual chair work</Heading>
    </Flex>
  )
}

export default Home
