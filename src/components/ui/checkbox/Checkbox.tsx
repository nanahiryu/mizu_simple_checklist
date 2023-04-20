import { Flex } from "@chakra-ui/react";
import React from "react";
import { FiCheck } from "react-icons/fi";

type CheckboxProps = {
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox = (props: CheckboxProps) => {
  const { checked, onChange } = props;
  return (
    <Flex w="32px" h="32px">
      <label className="checkbox-label">
        <input
          style={{ display: "none" }}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        {checked && (
          <Flex w="full" h="full" align="center" justify="center">
            <FiCheck size={32} color="#6EA5A5" />
          </Flex>
        )}
      </label>
    </Flex>
  );
};
