import React from "react";
import { TouchableOpacityProps } from "react-native";
import { VariantsButtonType } from "src/@types/buttonVarianst";

import * as S from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  variant?: VariantsButtonType;
};

const Button: React.FC<ButtonProps> = ({
  title,
  variant = "SUCCESS",
  ...rest
}: ButtonProps) => {
  return (
    <S.Container variant={variant} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
export default Button;
