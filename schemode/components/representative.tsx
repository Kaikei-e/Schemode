import { Box, Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  isTheMode: boolean
}

type Opinions = {
  readonly id: number;
  text: string;
};


const RepresentativeInput = (props: Props) => {
  const [text, setText] = useState('');
  const [opinions, setOpinions] = useState<Opinions[]>([]);

  const handleSubmit = () => {
    if (!text) return;

    const newOpinion: Opinions = {
      text: text,
      id: new Date().getTime(),
    };

    setOpinions([newOpinion, ...opinions]);
    setText('');
  };

  if (props.isTheMode) {
    return (
      <Box borderRadius={"xl"} w="fit-content" h={"fit-content"} m={5} padding={"2"}>
        <Flex flexDir={"column"} alignItems={"center"}>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}>
            <Textarea bgColor={"gray.200"} borderRadius={"xl"} w={"min"} h={"20"} marginBottom={"2"} isRequired></Textarea>
            <br/>
            <Input type={"submit"} w={"fit-content"} bgColor={"gray.200"} borderRadius={"xl"} />
          </form>
        </Flex>
      </Box>
    );

  } else {
    return <div></div>
  }

}

export default RepresentativeInput;