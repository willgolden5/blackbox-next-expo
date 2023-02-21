import { Flex, Heading } from "@chakra-ui/react";
import { SignIn, useAuth } from "@clerk/nextjs";
import PortfolioChart from "../components/charts/PortfolioChart";

const TradeDashboard = () => {
  // if not authed, redirect to login page
  // if authed, show the trade dashboard
  const { userId } = useAuth();

  if (!userId) {
    // redirect to login page
    return <SignIn />;
  }
  return (
    <Flex h="100%" alignItems="center" justifyContent="center">
      <Flex
        h="100%"
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Heading mb={3}>Trade Dashboard</Heading>
        <PortfolioChart />
      </Flex>
    </Flex>
  );
};

export default TradeDashboard;
