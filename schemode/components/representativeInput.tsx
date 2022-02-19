import { Box, Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  isTheMode: boolean
  Opinions: Opinions
  onClick: any
}

type Opinions = {
  readonly id: number;
  text: string;
};


const RepresentativeInput = (props: Props) => {
  const [text, setText] = useState('');
  let count = 0

  const detectChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const detectSubmit = () => {
    if (!text) return;

    const newOpinion: Opinions = {
      text: props.Opinions.text,
      id: count += 1,
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
            <Button type={"submit"} w={"fit-content"} bgColor={"gray.200"} borderRadius={"xl"} onClick={props.onClick} >Submit</Button>
          </form>
        </Flex>
      </Box>
    );

  } else {
    return <div></div>
  }

}

export default RepresentativeInput;