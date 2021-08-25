import React, { FC, MouseEventHandler } from "react";
import styled from "styled-components";

interface StyledButtonProps {
  color: "primary" | "secondary" | "danger";
  disabled: boolean;
}

const Colors = {
  primary: "#1976d2",
  secondary: "#e0e0e0",
  danger: "#dc004e",
};

const Button = styled.button<StyledButtonProps>`
  justify-content: center;
  background-color: ${(props) => Colors[props.color]};
  color: ${(props) => (props.color === "secondary" ? "black" : "snow")};
  font-size: 1.3em;
  font-weight: 400;
  padding: 12px 20px;
  border-radius: 12px;
  max-width: 250px;
  text-align: center;
  cursor: ${(props) => (!props.disabled ? "pointer" : "not-allowed")};
  border: none;
  box-shadow: ${(props) =>
    !props.disabled ? "1px 1px 3px 0 rgb(0 0 0 / 50%)" : "none"};
  opacity: ${(props) => (!props.disabled ? 1 : 0.4)};

  &:hover:enabled,
  &:focus:enabled {
    opacity: 0.8;
  }
`;

export interface ButtonProps {
  text: string;
  action?: MouseEventHandler<HTMLButtonElement>;
  type?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

const SimpleFiButton: FC<ButtonProps> = ({
  text,
  action,
  disabled = false,
  type = "primary",
}) => {
  return (
    <Button onClick={action} color={type} disabled={disabled}>
      {text}
    </Button>
  );
};

export default SimpleFiButton;
