import { ReactNode } from "react";
import dynamic from 'next/dynamic';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "./Logo";

const Links: string[] = ["About", "Contact"];

const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box flexDirection="row" position="fixed" width="full" maxWidth="100hw" bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {Links.length ? (
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        ) : null}
        <HStack spacing={8} alignItems={"center"}>
          <Box>
            <Link as={NextLink} href="/">
              <Logo />
            </Link>
          </Box>

          <HStack
            as={"nav"}
            spacing={4}
            display={{ base: "none", md: "flex" }}
          >
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>

        <HStack alignItems={"center"} spacing={4}>
          <WalletMultiButtonDynamic />
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
            <Avatar size={"md"} src={""} />
            </MenuButton>
          </Menu>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
