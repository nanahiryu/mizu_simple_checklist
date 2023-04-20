import { Box, Flex, Input, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Checkbox } from "../ui/checkbox/Checkbox";
import { FaRegEdit } from "react-icons/fa";
import { BookMarkButton } from "../ui/Button/BookMarkButton";
import { CrossDeleteButton } from "../ui/Button/CrossDeleteButton";
import { CrossAddButton } from "../ui/Button/CrossAddButton";

type Item = {
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
                transition: "all 0.3s",
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

type NormalModeProps = {
  todoItems: Item[];
  setTodoItems: React.Dispatch<React.SetStateAction<Item[]>>;
};

const NormalModeField = (props: NormalModeProps) => {
  const { todoItems, setTodoItems } = props;
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
  return (
    <>
      <Stack mt="20px" spacing="20px">
        {todoItems.map((item) => (
          <Flex
            key={item.id}
            w="calc(180px + 2*(20px + 32px))"
            justify="center"
            align="center"
            pos="relative"
          >
            <Flex align="center" justify="center" pos="absolute" left="0">
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
          </Flex>
        ))}
      </Stack>
    </>
  );
};

type EditModeProps = {
  todoItems: Item[];
  setTodoItems: React.Dispatch<React.SetStateAction<Item[]>>;
};

const EditModeField = (props: EditModeProps) => {
  const { todoItems, setTodoItems } = props;
  const onClickBookMarkButton = (id: number) => {
    // toggle isMarked
    const newTodoItems = todoItems.map((item) => {
      if (item.id === id) {
        item.isMarked = !item.isMarked;
      }
      return item;
    });
    setTodoItems(newTodoItems);
    console.log(todoItems);
  };
  const onClickDeleteButton = (id: number) => {
    // delete item
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(newTodoItems);
    console.log(todoItems);
  };
  return (
    <>
      <Stack mt="20px" spacing="20px">
        {todoItems.map((item) => (
          <Flex
            key={item.id}
            w="calc(180px + 2*(20px + 32px))"
            justify="center"
            align="center"
            pos="relative"
          >
            <Flex align="center" justify="center" pos="absolute" left="0">
              <BookMarkButton
                id={item.id}
                isMarked={item.isMarked}
                onClick={onClickBookMarkButton}
              />
            </Flex>
            <Flex
              align="center"
              justify="center"
              w="180px"
              h="40px"
              bg={item.isMarked ? "ui.lightteal" : "ui.lightgray"}
            >
              <Text fontSize="16pt">{item.name}</Text>
              <Flex align="center" justify="center" pos="absolute" right="0">
                <CrossDeleteButton id={item.id} onClick={onClickDeleteButton} />
              </Flex>
            </Flex>
          </Flex>
        ))}
        <AddItemField todoItems={todoItems} setTodoItems={setTodoItems} />
      </Stack>
    </>
  );
};

type AddItemFieldProps = {
  todoItems: Item[];
  setTodoItems: React.Dispatch<React.SetStateAction<Item[]>>;
};
const AddItemField = (props: AddItemFieldProps) => {
  const { todoItems, setTodoItems } = props;
  const [inputValue, setInputValue] = useState<string>("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleAddItem = () => {
    const newTodoItems = [
      ...todoItems,
      {
        id: todoItems.length + 1,
        name: inputValue,
        isChecked: false,
        isMarked: false,
      },
    ];
    setTodoItems(newTodoItems);
    setInputValue("");
  };
  const onSubmitNewItem: React.FormEventHandler = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    handleAddItem();
  };
  return (
    <Flex
      as="form"
      onSubmit={onSubmitNewItem}
      w="calc(180px + 2*(20px + 32px))"
      justify="center"
      align="center"
      pos="relative"
    >
      <Flex
        align="center"
        justify="center"
        w="180px"
        h="40px"
        bg="ui.lightgray"
      >
        <Input
          fontSize="14pt"
          textAlign="center"
          placeholder="アイテムを追加"
          value={inputValue}
          onChange={handleInput}
          border="none"
          borderRadius="none"
        />
        <Flex align="center" justify="center" pos="absolute" right="0">
          <CrossAddButton onClick={handleAddItem} />
        </Flex>
      </Flex>
    </Flex>
  );
};
