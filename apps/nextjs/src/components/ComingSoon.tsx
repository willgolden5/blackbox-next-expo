import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import cube from "../../public/cube.png";

const ComingSoon = () => {
  return (
    <Flex h="100%" alignItems="center" justifyContent="center">
      <Flex
        h="100%"
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Image width={96} height={96} alt={"logo"} src={cube} />
        <Heading mb={3}>Coming Soon...</Heading>
        <Text mb={6}>Sign up to be notified when blackbox goes live.</Text>
        <Flex direction="column" w="%">
          <Button as="a" colorScheme={"yellow"} type="submit" href="/sign-up">
            Get Notified
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ComingSoon;
