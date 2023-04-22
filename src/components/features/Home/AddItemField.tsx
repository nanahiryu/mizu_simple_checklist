import { Flex, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Item } from "../../pages/Home";
import { CrossAddButton } from "../../ui/Button/CrossAddButton";

type AddItemFieldProps = {
  todoItems: Item[];
  setTodoItems: React.Dispatch<React.SetStateAction<Item[]>>;
};
export const AddItemField = (props: AddItemFieldProps) => {
  const { todoItems, setTodoItems } = props;
  const [inputValue, setInputValue] = useState<string>("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const ref = useRef<HTMLInputElement>(null);
  const rotateAddButton = (deg: number) => {
    const button = ref.current;
    if (button) {
      console.log("rotate!");
      button.style.transitionDuration = "0.2s";
      button.style.transform = `rotate(${deg}deg)`;
    }
  };
  const resetRotateAddButton = () => {
    const button = ref.current;
    if (button) {
      console.log("reset!");
      button.style.transform = "none";
    }
  };
  const handleAddItem = () => {
    rotateAddButton(45);
    setTimeout(() => {
      const newTodoItems = [
        ...todoItems,
        {
          id: todoItems.length + 1,
          name: inputValue,
          isChecked: false,
          isMarked: false,
          isArchived: false,
        },
      ];
      setTodoItems(newTodoItems);
      setInputValue("");
      resetRotateAddButton();
    }, 400);
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
          <CrossAddButton _ref={ref} onClick={handleAddItem} />
        </Flex>
      </Flex>
    </Flex>
  );
};
