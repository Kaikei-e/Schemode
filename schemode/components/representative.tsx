import { Box, Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  Opinions: Opinions[]
  onClick: any
}

type Opinions = {
  readonly id: number;
  text: string;
};


const RepresentativeField = (props: Props) => {
  const [text, setText] = useState('');

    return (
      <Box borderRadius={"xl"} w="fit-content" h={"fit-content"} m={5} padding={"2"}>
        <Flex flexDir={"column"}>
          {props.Opinions.map((ele) => {
            return <li key={ele.id}>{ele.text}</li>;
          })}
        </Flex>
        
      </Box>
    );

}

export default RepresentativeField;