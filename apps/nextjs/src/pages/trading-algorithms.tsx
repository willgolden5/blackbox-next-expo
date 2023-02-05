import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

//this page should show the trading algorithms that we have available to trade with

const TradingAlgorithms = () => {
  const [ticker, setTicker] = useState("");
  const [accountValue, setAccountValue] = useState({
    lastTradeValue: 0,
    portfolioValue: 0,
    lastTradeSymbol: "",
  });
  const toast = useToast();

  const handleSubmit = async () => {
    const getToken = getCookie("account");
    const jsonCookie = JSON.parse(getToken as string);
    const accessToken = jsonCookie.alpaca_token ? jsonCookie.alpaca_token : "";

    if (ticker.length >= 1) {
      const res = await fetch("/api/start-algo", {
        method: "POST",
        body: JSON.stringify({
          symbol: ticker,
          algo: "mean-reversion",
          accessToken,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.error) {
        toast({
          title: "Error",
          description: data.error,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Algorithm started",
          description: "Your algorithm has been started",
          status: "success",
          duration: 3000,
        });
      }
    } else {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        status: "error",
        duration: 3000,
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch("/api/user/get-account-data");
      const data = await res.json();
      setAccountValue({
        lastTradeValue: 0,
        portfolioValue: data.account.cash,
        lastTradeSymbol: "",
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // return (
  //   <Flex
  //     h="100%"
  //     alignItems="center"
  //     justifyContent="center"
  //     direction="column"
  //   >
  //     <Flex direction="column" background="gray.200" p={10} rounded={6}>
  //       <Heading mb={6}>In the mean time...</Heading>
  //       <Text mb={6}>Try out a twenty minute mean reversion algorithm:</Text>
  //       <Text mb={6}>Portfolio Value: ${accountValue.portfolioValue}</Text>
  //       <FormControl>
  //         <FormLabel>Ticker</FormLabel>
  //         <Input
  //           placeholder="AAPL"
  //           variant="filled"
  //           mb={3}
  //           onChange={(e) => setTicker(e.target.value)}
  //         />
  //       </FormControl>
  //       <Button mt={4} colorScheme={"yellow"} onClick={() => handleSubmit()}>
  //         Submit
  //       </Button>
  //     </Flex>
  //   </Flex>
  // );

  return (
    <Flex
      h="100%"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Heading mb={3}>Coming Soon...</Heading>
      <Text mb={6}>Sign up to be notified blackbox goes live!</Text>
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
    </Flex>
  );
};

export default TradingAlgorithms;
