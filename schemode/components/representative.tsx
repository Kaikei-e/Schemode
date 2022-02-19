import { Box, Flex, Input, Text } from "@chakra-ui/react";

type Props = {
  isTheMode: boolean
}


const RepresentativeInput = (props: Props) => {
  if(props.isTheMode){
    return (
      <Box bgColor={"blackAlpha.100"} borderRadius={"xl"} w="fit-content" h={"fit-content"} m={5}>
        <Flex flexDir={"column"}>
          <Input type={"text"} borderRadius={"xl"} w={"min"}></Input>
        </Flex>
      </Box>
    );
  
  }else{
    return <div></div>
  }

}

export default RepresentativeInput;