import { Flex, Heading, Text } from "@chakra-ui/react";

export interface Strategy {
  name: string;
  description: string;
  author: string;
  id: string;
}

const StrategyCard = ({ name, description, author, id }: Strategy) => {
  return (
    <Flex h="400px" w="33%">
      <Heading>{name}</Heading>
      <Text>{description}</Text>
      <Text>{author}</Text>
    </Flex>
  );
};

export default StrategyCard;
