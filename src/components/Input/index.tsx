import React from "react";
import {
  Container,
  InputComponent,
  InputIcon,
  InputSearchComponent,
  IconContainer,
  InputGroup,
  ContentInput,
} from "./styles";

import { Label } from "@/components/Label";

import { SEARCH_LENS } from "@/assets";
import { maskPhone } from "@/utils/Mask";

interface InputProps {
  searchIput?: boolean;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  value?: string;
  mask?: "phone";
  isInvalid?: boolean;
}

export function Input({
  searchIput,
  onChange,
  placeholder,
  disabled,
  label,
  value,
  mask,
  isInvalid,
}: InputProps) {
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    if (value) {
      let formatted = value;
      if (mask === "phone") {
        const digitsOnly = value.replace(/\D/g, "").slice(0, 11);
        formatted = maskPhone(digitsOnly);
      }
      setInputValue(formatted);
    }
  }, [value, mask]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value;

    if (mask === "phone") {
      newValue = newValue.replace(/\D/g, "");
      if (newValue.length > 11) newValue = newValue.slice(0, 11);

      newValue = maskPhone(newValue);
    }

    setInputValue(newValue);

    const cleanValue =
      mask === "phone" ? newValue.replace(/\D/g, "") : newValue;

    if (onChange) {
      onChange(cleanValue);
    }
  };

  return (
    <Container>
      {!searchIput && (
        <ContentInput>
          {label && (
            <Label text={label} colorScheme="secondary" type="h2" mb={2} />
          )}

          <InputComponent
            data-testid={label}
            isInvalid={isInvalid}
            value={inputValue}
            colorScheme="primary"
            onChange={handleOnChange}
            placeholder={placeholder}
            disabled={disabled}
          />
        </ContentInput>
      )}
      {searchIput && (
        <InputGroup>
          <IconContainer>
            <InputIcon
              src={SEARCH_LENS.src}
              alt="lupa"
              data-testid="search-icon"
            />
          </IconContainer>
          <InputSearchComponent
            colorScheme="primary"
            onChange={handleOnChange}
            placeholder={placeholder}
          />
        </InputGroup>
      )}
    </Container>
  );
}
