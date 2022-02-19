import { Box, Button, Flex, Heading, Text, useToast } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useState } from 'react'
import ModeState from '../components/modeState'
import incrementMode from '../lib/modeManager/modeIncrementer'


const Home: NextPage = () => {
  const toast = useToast()
  const [count, setCount] = useState(0)


  return (
    <Flex bgColor={"blackAlpha.100"} flexDir="column" w={"100vw"} h={"100vh"}>
      <Heading textAlign={"center"} fontStyle={"normal"} fontWeight={"medium"} m={"5"}>Schemode: The virtual chair work</Heading>
      <ModeState mode={count} />
      <Flex flexDir={"row"} alignItems={"stretch"}>
        <Box bgColor={"green.200"} w={"30%"} ml={"5"} mr={"5"} h={"65vh"} borderRadius="3xl">
          <Heading fontSize={"2xl"} textAlign={"center"} fontStyle={"normal"} fontWeight={"medium"} m={"4"}>Healthy Adult Mode</Heading>
          <Flex flexDir={"column"} m={"5"}><Text>Hi, I'm healthy adult mode!</Text></Flex>
        </Box>
        <Box bgColor={"yellow.100"} w={"30%"} ml={"5"} mr={"5"} h={"65vh"} borderRadius="3xl">
          <Heading fontSize={"2xl"} textAlign={"center"} fontStyle={"normal"} fontWeight={"medium"} m={"4"}>Dysfunctional Child Mode</Heading>
          <Flex flexDir={"column"} m={"5"}><Text>I'm Dysfunctional child mode</Text></Flex>
        </Box>
        <Box bgColor={"red.100"} w={"30%"} ml={"5"} mr={"5"} h={"65vh"} borderRadius="3xl" overflow={"auto"} scrollBehavior={"smooth"}>
          <Heading fontSize={"2xl"} textAlign={"center"} fontStyle={"normal"} fontWeight={"medium"} m={"4"}>Dysfunctional Parent Mode</Heading>
          <Flex flexDir={"column"} m={"5"}><Text>I'm dysfunctional Parent mode</Text></Flex>
        </Box>
      </Flex>
      <Flex flexDir={"column"} align={"center"} w={"100vw"}>
        <Button m={"10"} fontSize="3xl" bgColor={"blue.200"} w={"md"} borderRadius={"2xl"}
          onClick={() => {
            toast({
              position: 'bottom-left',
              render: () => (
                <Box color='white' p={3} bg='blue.300' borderRadius={"2xl"}>
                  Mode changed!!
                </Box>),
              title: '',
              description: "Changed to next mode.",
              status: 'success',
              duration: 4000,
              isClosable: true,
            })
            setCount(incrementMode(count))

          }}
        >Switch!!</Button>
      </Flex>
    </Flex>
  )
}

export default Home
