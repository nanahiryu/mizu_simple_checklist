import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { NormalModeField } from "../features/Home/NormalModeField";
import { EditModeField } from "../features/Home/EditModeField";

export type Item = {
  id: number;
  isChecked: boolean;
  isMarked: boolean;
  name: string;
};

const ItemDemo = [
  {
    id: 1,
    isChecked: false,
    isMarked: true,
    name: "服",
  },
  {
    id: 2,
    isChecked: false,
    isMarked: false,
    name: "スマホ",
  },
  {
    id: 3,
    isChecked: false,
    isMarked: false,
    name: "傘",
  },
];

export const Home = () => {
  const [todoItems, setTodoItems] = useState<Item[]>(ItemDemo);
  const [mode, setMode] = useState<"edit" | "normal">("normal");
  const toggleMode = () => {
    setMode(mode === "normal" ? "edit" : "normal");
  };

  useEffect(() => {
    setTodoItems(ItemDemo);
    console.log(todoItems);
  }, []);
  return (
    <>
      <Flex w="full" h="full" p="20px" align="center" justify="center">
        <Flex
          w="510px"
          h="600px"
          bg="white"
          direction="column"
          align="center"
          shadow="md"
        >
          <Flex
            w="full"
            my="40px"
            align="center"
            justify="center"
            pos="relative"
          >
            <Text fontSize="20pt">LIST</Text>
            <Box
              mr="32px"
              pos="absolute"
              right="0"
              color={mode === "normal" ? "ui.gray" : "ui.teal"}
              _hover={{
                cursor: "pointer",
                color: "gray.400",
              }}
              onClick={() => toggleMode()}
            >
              <FaRegEdit size={28} />
            </Box>
          </Flex>
          {mode === "normal" ? (
            <NormalModeField
              todoItems={todoItems}
              setTodoItems={setTodoItems}
            />
          ) : (
            <EditModeField todoItems={todoItems} setTodoItems={setTodoItems} />
          )}
        </Flex>
      </Flex>
    </>
  );
};
