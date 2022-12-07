import { ButtonIcon } from "@components/index";
import React from "react";

import * as S from "./styles";

type PlayerCardsProps = {
  name: string;
  onRemove:(name:string)=>void
};

const PlayerCards: React.FC<PlayerCardsProps> = ({
  name,onRemove
}: PlayerCardsProps) => {
  return (
    <S.Container>
      <S.Icon name="person" />
      <S.Name>{name}</S.Name>
      <ButtonIcon icon="close" variant="DANGER" onPress={()=> onRemove(name)} />
    </S.Container>
  );
};
export default PlayerCards;
