import { Box, Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { opinionState } from "../lib/stateManage/atom";
import { theOpinion } from "../lib/structures/theOpinions";


const RepresentativeInput = (props) => {

  const [text, setText] = useState('');
  const [opinions, setOpinions] = useRecoilState(opinionState);
  let count = 0

  const detectChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const detectSubmit = () => {
    if (!text) return;

    const newOpinion: theOpinion = {
      text: props.Opinions.text,
      id: count += 1,
      mode: props.setOpinions
    };

    props.setOpinions([newOpinion, ...opinions]);
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
            <Button type={"submit"} w={"fit-content"} bgColor={"gray.200"} borderRadius={"xl"} onClick={props.addOpinions} >Submit</Button>
          </form>
        </Flex>
      </Box>
    );

  } else {
    return <div></div>
  }

}

export default RepresentativeInput;