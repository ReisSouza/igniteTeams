import React from "react";
import {  TouchableOpacityProps } from "react-native";

import * as S from "./styles";

type GroupCardsProps = TouchableOpacityProps & {
  title: string;
};

const GroupCards: React.FC<GroupCardsProps> = ({ title, ...rest }: GroupCardsProps) => {
  return (
    <S.Container {...rest}>
      <S.Icon />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
export default GroupCards;
