import { Checkbox, Flex, HStack, Input, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

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
    isChecked: true,
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
      <Flex w="full" h="full" direction="column" p="20px">
        <Text fontSize="20pt">TODO</Text>
        <Stack mt="20px">
          <HStack spacing="20px">
            <Text w="70px" fontSize="16pt">
              CHECK
            </Text>
            <Text fontSize="16pt">ITEM</Text>
          </HStack>
          {todoItems.map((item) => (
            <HStack key={item.id} spacing="20px">
              <Flex w="70px" align="center" justify="center">
                <Checkbox
                  size="lg"
                  colorScheme="gray"
                  defaultChecked={item.isChecked}
                  checked={item.isChecked}
                  onChange={(e) => handleCheck(e, item.id)}
                />
              </Flex>
              <Flex
                align="start"
                w="300px"
                py="2px"
                pl="8px"
                borderRadius="sm"
                shadow="md"
              >
                <Text fontSize="16pt">{item.name}</Text>
              </Flex>
            </HStack>
          ))}
        </Stack>
      </Flex>
    </>
  );
};
