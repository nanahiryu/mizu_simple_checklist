import { Flex } from "@chakra-ui/react";
import React from "react";
import { RxPlus } from "react-icons/rx";

type CrossAddButtonProps = {
  onClick: () => void;
  _ref: any;
};

export const CrossAddButton = (props: CrossAddButtonProps) => {
  const { onClick, _ref } = props;
  return (
    <Flex
      w="32px"
      h="32px"
      onClick={onClick}
      _hover={{ cursor: "pointer", color: "teal.400" }}
      ref={_ref}
    >
      <RxPlus size={32} />
    </Flex>
  );
};
