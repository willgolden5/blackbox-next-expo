"use client";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import cube from "../../public/cube.png";

export default function Home() {
  return (
    <Flex
      h="100%"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Image width={96} height={96} alt={"logo"} src={cube} />
      <Heading mb={3}>Coming Soon...</Heading>
      <Text mb={6}>Sign up to be notified when blackbox goes live.</Text>
      <Flex direction="column" w="20%">
        <Button
          as="a"
          colorScheme={"yellow"}
          type="submit"
          href="/sign-up"
          w="100%"
        >
          Get Notified
        </Button>
      </Flex>
      {/* <SignedIn>// TODO: put signed in dashboard here</SignedIn> */}
    </Flex>
  );
}
