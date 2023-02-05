import { Flex } from "@chakra-ui/react";
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
  <Flex h="100%" alignItems="center" justifyContent="center" direction="column">
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
  </Flex>
);

export default SignUpPage;
