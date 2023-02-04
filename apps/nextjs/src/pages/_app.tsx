// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { ChakraProvider } from "@chakra-ui/react";
import { trpc } from "../utils/trpc";
import theme from "../theme";
import DefaultLayout from "../components/layout";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <ClerkProvider {...pageProps}>
      <ChakraProvider theme={theme}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ChakraProvider>
    </ClerkProvider>
  );
};

export default trpc.withTRPC(MyApp);
