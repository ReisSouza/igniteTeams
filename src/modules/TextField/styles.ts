import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({theme}) => css`
    flex-direction: row;
    background-color: ${theme.COLORS.GRAY_700};
    border-radius: 8px;
  `}
`;
