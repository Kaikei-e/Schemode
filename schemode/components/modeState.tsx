import { Heading } from "@chakra-ui/react";

type Props = {
  mode: number
}

const modeNum = [
  "Healthy Adult Mode",
  "Vulnerable Child Mode",
  "Dysfunctional Parent Mode"
]

const theMode = "Now, you're :" 

const ModeState = (props: Props) => {


  return (
    <Heading textAlign={"center"} fontStyle={"normal"} fontWeight={"light"} m={"5"}>{theMode} {modeNum[props.mode]}</Heading>
  );


}

export default ModeState;