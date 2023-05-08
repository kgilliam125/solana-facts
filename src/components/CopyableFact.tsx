import { CopyIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  Text,
  useClipboard,
} from "@chakra-ui/react";

export const CopyableFact = ({fact}: any) => {
  const { onCopy } = useClipboard(fact);
  return (
    <HStack bg="gray.100" rounded={"xl"} mb="1rem">
      <Text>{fact}</Text>
      <Button onClick={onCopy}>
        <CopyIcon />
      </Button>
    </HStack>
  );
};
