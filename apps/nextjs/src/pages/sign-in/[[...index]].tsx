import { Flex } from "@chakra-ui/react";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <Flex h="100%" alignItems="center" justifyContent="center" direction="column">
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
  </Flex>
);

export default SignInPage;
