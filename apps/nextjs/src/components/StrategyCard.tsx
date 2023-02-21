import { Flex, Heading, Text } from "@chakra-ui/react";
import PortfolioChart from "./charts/PortfolioChart";

export interface Strategy {
  name: string;
  description: string;
  author: string;
  id: number;
}

const StrategyCard = ({ name, description, author, id }: Strategy) => {
  return (
    <Flex
      h="300px"
      w="300px"
      direction="column"
      justify="center"
      align="center"
      p={2}
      m={2}
      bg="gray.100"
    >
      <Flex direction="column" justify="center" align="center" w="100%">
        <PortfolioChart chartW={280} chartH={150} />
      </Flex>
      <Heading>{name}</Heading>
      <Text>{description}</Text>
      <Text>{author}</Text>
    </Flex>
  );
};

export default StrategyCard;
