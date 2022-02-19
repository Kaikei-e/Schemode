import { Spinner } from "@chakra-ui/react";

type Props = {
  mode: () => {}
}

const CurrentModeIndicater = (props: Props) => {
  return (
    <div>
      {() => {
        if (props.mode.arguments >= 0 || props.mode.arguments < 3) {
          return (

            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blackAlpha.500'
              size='xl'
            />
          );
        }
      }}
    </div>

  );
}


export default CurrentModeIndicater;