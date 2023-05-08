import { ChakraProvider, HStack, Text, Link } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import Navbar from "./Navbar";
import NextLink from "next/link";
import { WorkspaceProvider } from "../providers/workspaceProvider";
import WalletContextProvider from "./WalletContextProvider";


interface LayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: LayoutProps) {
  return (
    <ChakraProvider>
      <WalletContextProvider>
        <WorkspaceProvider>
          <main>
            {/* <Navbar /> */}
            {children}
            <Footer>
              <HStack>
                <Text>
                  Created with ❤️ by <Link href="https://twitter.com/kylelgilliam">KG</Link>
                </Text>
              </HStack>
            </Footer>
          </main>
        </WorkspaceProvider>
      </WalletContextProvider>
    </ChakraProvider>
  );
}
