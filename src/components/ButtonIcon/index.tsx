import React from "react";
import { TouchableOpacityProps } from "react-native";
import { VariantsButtonType } from "src/@types/buttonVarianst";
import * as S from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type ButtonIconProps = TouchableOpacityProps & {
  variant?: VariantsButtonType;
  icon: keyof typeof  MaterialIcons.glyphMap;
};

const ButtonIcon: React.FC<ButtonIconProps> = ({
  variant = "SUCCESS",
  icon,
  ...rest
}: ButtonIconProps) => {
  return (
    <S.Container {...rest}>
      <S.Icon variants={variant} name={icon} />
    </S.Container>
  );
};
export default ButtonIcon;
