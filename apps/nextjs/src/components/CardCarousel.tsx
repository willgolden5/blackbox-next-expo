import { Flex } from "@chakra-ui/react";
import StrategyCard from "./StrategyCard";

const CardCarousel = () => {
  return (
    <Flex w="100%" direction="row" justify="space-between">
      <StrategyCard
        name="Strategy 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        author="John Doe"
        id={1}
      />
      <StrategyCard
        name="Strategy 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        author="Tom Smith"
        id={2}
      />
      <StrategyCard
        name="Strategy 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        author="John Doe"
        id={3}
      />
    </Flex>
  );
};

export default CardCarousel;
