import { Flex } from "@chakra-ui/react";
import React from "react";
import { RxPlus } from "react-icons/rx";

type CrossAddButtonProps = {
  onClick: () => void;
};

export const CrossAddButton = (props: CrossAddButtonProps) => {
  const { onClick } = props;
  return (
    <Flex
      w="32px"
      h="32px"
      onClick={onClick}
      _hover={{ cursor: "pointer", color: "teal.400" }}
      transition="all 0.2s"
    >
      <RxPlus size={32} />
    </Flex>
  );
};
