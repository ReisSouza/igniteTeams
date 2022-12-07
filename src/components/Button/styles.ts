import { TouchableOpacity } from "react-native";
import { VariantsButtonType } from "src/@types/buttonVarianst";
import styled, { css } from "styled-components/native";

type ButtonProps = {
  variant?: VariantsButtonType;
};

export const Container = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, variant }) =>
    variant === "SUCCESS" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`;
