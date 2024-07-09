import { Spinner } from "@chakra-ui/react";

type Props = {
  isTheMode: boolean;
};

const CurrentModeIndicater = (props: Props) => {
  if (props.isTheMode) {
    return (
      <Spinner
        margin={2}
        thickness="4px"
        speed="2.5s"
        emptyColor="gray.200"
        color="blue.500"
        size="md"
      />
    );
  } else {
    return <div></div>;
  }
};

export default CurrentModeIndicater;
