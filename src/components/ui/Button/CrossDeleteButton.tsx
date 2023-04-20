import { Flex } from "@chakra-ui/react";
import React from "react";
import { RxCross2 } from "react-icons/rx";

type CrossDeleteButtonProps = {
  id: number;
  onClick: (id: number) => void;
};

export const CrossDeleteButton = (props: CrossDeleteButtonProps) => {
  const { id, onClick } = props;
  return (
    <Flex
      w="32px"
      h="32px"
      onClick={() => onClick(id)}
      _hover={{ cursor: "pointer", color: "red.400" }}
    >
      <RxCross2 size={32} />
    </Flex>
  );
};
