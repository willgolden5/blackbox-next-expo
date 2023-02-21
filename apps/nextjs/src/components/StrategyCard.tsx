import { Button, Flex, Heading, Text } from "@chakra-ui/react";
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
      h="340px"
      w="300px"
      direction="column"
      justify="center"
      align="center"
      p={2}
      m={2}
      bg="gray.100"
    >
      <Heading>{name}</Heading>
      <Flex direction="column" justify="center" align="center" w="100%">
        <PortfolioChart chartW={280} chartH={150} />
      </Flex>
      <Text>{description}</Text>
      <Flex w="100%">
        <Button w="50%" h="80px" colorScheme="green" borderRadius={0}>
          Buy
        </Button>
        <Button w="50%" h="80px" colorScheme="red" borderRadius={0}>
          Sell
        </Button>
      </Flex>
    </Flex>
  );
};

export default StrategyCard;
