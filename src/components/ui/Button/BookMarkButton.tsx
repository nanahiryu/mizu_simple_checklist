import { Flex } from "@chakra-ui/react";
import React from "react";
import { BsBookmarkFill } from "react-icons/bs";

type BookMarkButtonProps = {
  id: number;
  isMarked?: boolean;
  onClick: (id: number) => void;
};

export const BookMarkButton = (props: BookMarkButtonProps) => {
  const { id, isMarked, onClick } = props;
  return (
    <Flex
      w="32px"
      h="32px"
      color={isMarked ? "ui.teal" : "ui.lightgray"}
      onClick={() => onClick(id)}
      _hover={{ cursor: "pointer" }}
    >
      <BsBookmarkFill size={32} />
    </Flex>
  );
};
