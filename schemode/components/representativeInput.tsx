import { Box, Button, Flex, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { countState, opinionsState } from "../lib/stateManage/atom";
import { theOpinion } from "../lib/structures/theOpinions";


const RepresentativeInput = (props: { count: number }) => {

  const [text, setText] = useState('');
  const [opinions, setOpinions] = useRecoilState(opinionsState);
  const [count, setCount] = useRecoilState(countState)

  const increment = (ct: number) => {
    return ct + 1;
  }

  const detectChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const detectSubmit = () => {
    if (!text) return;
    setCount(increment)

    const newOpinion: theOpinion = {
      text: text,
      id: count,
      mode: props.count
    };

    setOpinions([newOpinion, ...opinions]);
    setText('');
  };

  if (props.isTheMode) {
    return (
      <Box borderRadius={"xl"} w="fit-content" h={"fit-content"} m={5} padding={"2"}>
        <Flex flexDir={"column"}>
        </Flex>
        <Flex flexDir={"column"} alignItems={"center"}>
          <form onSubmit={(e) => {
            e.preventDefault();
            detectSubmit();
          }}>
            <Textarea bgColor={"gray.200"} borderRadius={"xl"}
              w={"min"} h={"20"}
              marginBottom={"2"}
              isRequired
              onChange={(e) => detectChanges(e)} >

            </Textarea>
            <br />
            <Button type={"submit"} w={"fit-content"} bgColor={"gray.200"} borderRadius={"xl"} onSubmit={detectSubmit} >Submit</Button>
          </form>
        </Flex>
      </Box>
    );

  } else {
    return <div></div>
  }

}

export default RepresentativeInput;