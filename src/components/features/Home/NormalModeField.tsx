import { Flex, Stack, Text } from "@chakra-ui/react";
import { Item } from "../../pages/Home";
import { Checkbox } from "../../ui/checkbox/Checkbox";

type NormalModeProps = {
  todoItems: Item[];
  setTodoItems: React.Dispatch<React.SetStateAction<Item[]>>;
};

export const NormalModeField = (props: NormalModeProps) => {
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
        {todoItems
          .filter((item) => !item.isArchived)
          .map((item) => (
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
