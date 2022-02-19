import { Box, Flex, Text } from "@chakra-ui/react";

type Props = {
  isTheMode: boolean
}


const Representative = (props: Props) => {
  if(props.isTheMode){
    return (
      <Box bgColor={"blackAlpha.200"} w="fit-content" h={"fit-content"}>
        <Flex flexDir={"column"}>
          <Text>The mode</Text>
        </Flex>
      </Box>
    );
  
  }else{
    return <div>none</div>
  }

}

export default Representative;