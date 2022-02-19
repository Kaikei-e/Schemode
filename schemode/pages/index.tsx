import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'


const Home: NextPage = () => {
  return (
    <Flex bgColor={"blackAlpha.100"} flexDir="column" w={"100vw"} h={"100vh"}>
      <Heading textAlign={"center"} fontStyle={"normal"} fontWeight={"medium"} m={"5"}>Schemode: The virtual chair work</Heading>
      <Flex flexDir={"row"} alignItems={"stretch"}>
        <Box bgColor={"green.200"} w={"30%"} ml={"5"} mr={"5"} h={"70vh"} borderRadius="3xl">
          <Heading fontSize={"2xl"} textAlign={"center"} fontStyle={"normal"} fontWeight={"medium"} m={"2"}>Healthy Adult Mode</Heading>
          <Flex flexDir={"column"} m={"5"}><Text>Hi, I'm healthy adult mode!</Text></Flex>
        </Box>
        <Box bgColor={"yellow.100"} w={"30%"} ml={"5"} mr={"5"} h={"70vh"} borderRadius="3xl">
          <Heading fontSize={"2xl"} textAlign={"center"} fontStyle={"normal"} fontWeight={"medium"} m={"2"}>Dysfunctional Child Mode</Heading>
          <Flex flexDir={"column"} m={"5"}><Text>I'm Dysfunctional child mode</Text></Flex>
        </Box>
        <Box bgColor={"red.100"} w={"30%"} ml={"5"} mr={"5"} h={"70vh"} borderRadius="3xl" overflow={"auto"} scrollBehavior={"smooth"}>
          <Heading fontSize={"2xl"} textAlign={"center"} fontStyle={"normal"} fontWeight={"medium"} m={"2"}>Dysfunctional Parent Mode</Heading>
          <Flex flexDir={"column"} m={"5"}><Text>I'm dysfunctional Parent mode</Text></Flex>
        </Box>
      </Flex>

      <Flex flexDir={"column"} align={"center"} w={"100vw"}>
        <Button m={"10"} fontSize="3xl" bgColor={"blue.200"} w={"md"} borderRadius={"2xl"}>Switch!!</Button>
      </Flex>

    </Flex>
  )
}

export default Home
