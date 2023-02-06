import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import type { UserResource } from "@clerk/types";
import { useClerk, useUser } from "@clerk/nextjs";

type PopoverMenuProps = {
  user: UserResource;
};

const MenuRow = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => (
  <Flex
    as="a"
    w="full"
    direction="column"
    px={2}
    _hover={{ bg: "gray.100", cursor: "pointer" }}
    href={link}
  >
    <Box pt={4}>{children}</Box>
    <Divider w="100%" py={2} />
  </Flex>
);

const PopoverMenu = ({ user }: PopoverMenuProps) => {
  const toast = useToast();
  const { signOut } = useClerk();

  // get alpaca user and see if they have trade access

  const logout = () => {
    signOut();
    toast({
      title: "Logged out",
      description: "You have been logged out",
      status: "warning",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Flex direction="column" justify="center" align="center">
      <Flex direction="row" justify="center" align="center" w="full">
        <Avatar
          name={user.fullName as string}
          size="lg"
          bg="gray.700"
          color="white"
          my={2}
          mr={4}
        />
        <Flex direction="column" align="left" justify="center" my={6}>
          <Text fontSize="xl">{user.fullName as string}</Text>
          <Text fontSize="lg">
            {user.primaryEmailAddress?.emailAddress as string}
          </Text>
        </Flex>
      </Flex>
      <Divider w="100%" />
      <MenuRow link="#">
        <Heading as="a" w="100%" fontSize="2xl">
          Account
        </Heading>
      </MenuRow>
      <MenuRow link="#">
        <Heading as="a" w="100%" fontSize="2xl">
          Settings
        </Heading>
      </MenuRow>
      <MenuRow link="#">
        <Heading as="a" w="100%" fontSize="2xl">
          Dashboard
        </Heading>
      </MenuRow>
      <MenuRow link="#">
        <Heading as="a" w="100%" fontSize="2xl">
          Trades
        </Heading>
      </MenuRow>
      <MenuRow link="#">
        <Heading as="a" w="100%" fontSize="2xl">
          Algorithms
        </Heading>
      </MenuRow>
      <Flex
        direction="row"
        justify="space-evenly"
        align="center"
        w="100%"
        px={4}
        py={4}
      >
        <Text onClick={() => logout()}>Logout</Text>
        <Text>Help</Text>
        <Text>Contact</Text>
      </Flex>
    </Flex>
  );
};

export default PopoverMenu;
