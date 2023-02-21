import { Flex, Heading } from "@chakra-ui/react";
import { SignIn, useAuth } from "@clerk/nextjs";
import CardCarousel from "../components/CardCarousel";
import PortfolioChart from "../components/charts/PortfolioChart";

const TradeDashboard = () => {
  const { userId } = useAuth();

  if (!userId) {
    return (
      <Flex h="100%" alignItems="center" justifyContent="center">
        <Flex
          h="100%"
          alignItems="left"
          justifyContent="center"
          direction="column"
        >
          <SignIn />
        </Flex>
      </Flex>
    );
  }
  return (
    <Flex h="100%" alignItems="center" justifyContent="center">
      <Flex
        h="100%"
        alignItems="left"
        justifyContent="center"
        direction="column"
      >
        <Heading mb={3}>Portfolio:</Heading>
        <PortfolioChart chartW={600} />
        <CardCarousel />
      </Flex>
    </Flex>
  );
};

export default TradeDashboard;
