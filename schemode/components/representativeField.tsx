import { Box, Flex } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { opinionsState } from "../lib/stateManage/atom";


const RepresentativeField = () => {
  const [opinions, setOpinions] = useRecoilState(opinionsState);


  return (
    <Box borderRadius={"xl"} w="fit-content" h={"fit-content"} m={5} padding={"2"}>
      <Flex flexDir={"column"}>
        <ul>
          {opinions.map((opinion) => {return <li>{opinion.text}</li>})}
        </ul>
      </Flex>

    </Box>
  );

}

export default RepresentativeField;