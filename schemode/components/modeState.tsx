import { Heading } from "@chakra-ui/react";

type Props = {
  mode: number
}

const modeNum = [
  "Healthy Adult Mode",
  "Dysfunctional Child Mode",
  "Dysfunctional Parent Mode"
]

 const ModeState = (props:Props) =>  {
  return (
  <Heading textAlign={"center"} fontStyle={"normal"} fontWeight={"light"} m={"5"}>Now, you're :{modeNum[props.mode]}</Heading>
  );


}

export default ModeState;