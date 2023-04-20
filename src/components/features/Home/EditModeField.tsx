import { Flex, Stack, Text } from "@chakra-ui/react";
import { Item } from "../../pages/Home";
import { BookMarkButton } from "../../ui/Button/BookMarkButton";
import { CrossDeleteButton } from "../../ui/Button/CrossDeleteButton";
import { AddItemField } from "./AddItemField";

type EditModeProps = {
  todoItems: Item[];
  setTodoItems: React.Dispatch<React.SetStateAction<Item[]>>;
};

export const EditModeField = (props: EditModeProps) => {
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
