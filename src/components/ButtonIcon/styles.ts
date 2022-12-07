import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


import { VariantsButtonType } from "src/@types/buttonVarianst";

type ButtonIconProps = {
  variants?: VariantsButtonType;
};

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  margin-left: 12px;
`;


export const Icon = styled(MaterialIcons).attrs<ButtonIconProps>(({theme, variants})=>({
  size: 24,
  color: variants === 'SUCCESS' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK
}))``