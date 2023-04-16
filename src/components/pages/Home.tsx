import React, { useEffect, useState } from "react";
import styled from "styled-components";

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

const MainContentsWrapper = styled.div`
  padding: 20px;
`;

const TodoTitle = styled.div`
  margin: 0;
  font-size: 20pt;
`;

const TodoList = styled.div`
  margin-top: 20px;
`;

const TodoListHeader = styled.div`
  display: flex;
  gap: 20px;
`;

const TodoListHeaderCheck = styled.div`
  font-size: 16pt;
  width: 70px;
  text-align: center;
`;

const TodoListHeaderItem = styled.div`
  font-size: 16pt;
`;

const TodoListRow = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

const TodoListRowCheck = styled.div`
  display: flex;
  justify-content: center;
  width: 70px;
  text-align: center;
`;

const TodoListRowItem = styled.div`
  width: 300px;
  padding: 2px 0 2px 8px;
  font-size: 16pt;
  border-radius: 5px;
  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.35);
`;

const LargeCheckBox = styled.input`
  scale: 2;
`;

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
      <MainContentsWrapper>
        <TodoTitle>TODO</TodoTitle>
        <TodoList>
          <TodoListHeader>
            <TodoListHeaderCheck>CHECK</TodoListHeaderCheck>
            <TodoListHeaderItem>ITEM</TodoListHeaderItem>
          </TodoListHeader>
          {todoItems.map((item) => (
            <>
              <TodoListRow>
                <TodoListRowCheck>
                  <LargeCheckBox
                    type="checkbox"
                    checked={item.isChecked}
                    onChange={(e) => handleCheck(e, item.id)}
                  />
                </TodoListRowCheck>
                <TodoListRowItem>{item.name}</TodoListRowItem>
              </TodoListRow>
            </>
          ))}
        </TodoList>
      </MainContentsWrapper>
    </>
  );
};
