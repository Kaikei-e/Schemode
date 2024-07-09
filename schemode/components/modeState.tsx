import { Heading } from "@chakra-ui/react";

type Props = {
  mode: number;
};

const modeNum = [
  "Healthy Adult Mode",
  "Vulnerable Child Mode",
  "Dysfunctional Parent Mode",
];

const theMode = "Now, you're :";

const ModeState = (props: Props) => {
  return (
    <Heading
      fontSize={"x-large"}
      textAlign={"center"}
      fontStyle={"normal"}
      fontWeight={"medium"}
      m={"5"}
    >
      {theMode} {modeNum[props.mode]}
    </Heading>
  );
};

export default ModeState;
