import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Checkbox } from "../ui/checkbox/Checkbox";
import { FaRegEdit } from "react-icons/fa";

type Item = {
  id: number;
  isChecked: boolean;
  name: string;
};

const ItemDemo = [
  {
    id: 1,
    isChecked: false,
    name: "服",
  },
  {
    id: 2,
    isChecked: false,
    name: "スマホ",
  },
  {
    id: 3,
    isChecked: false,
    name: "傘",
  },
];

export const Home = () => {
  const [todoItems, setTodoItems] = useState<Item[]>(ItemDemo);
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const newTodoItems = todoItems.map((item) => {
      if (item.id === id) {
        item.isChecked = e.target.checked;
      }
      return item;
    });
    setTodoItems(newTodoItems);
    console.log(todoItems);
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
            <Box mr="32px" pos="absolute" right="0">
              <FaRegEdit size={28} />
            </Box>
          </Flex>
          <Stack mt="20px" spacing="20px">
            {todoItems.map((item) => (
              <HStack key={item.id} spacing="24px">
                <Flex align="center" justify="center">
                  <Checkbox
                    checked={item.isChecked}
                    onChange={(e) => handleCheck(e, item.id)}
                  />
                </Flex>
                <Flex
                  align="center"
                  justify="center"
                  w="180px"
                  h="40px"
                  bg={item.isChecked ? "ui.lightteal" : "ui.lightgray"}
                >
                  <Text fontSize="16pt">{item.name}</Text>
                </Flex>
              </HStack>
            ))}
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};
