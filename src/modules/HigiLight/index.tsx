import React from "react";

import * as S from "./styles";

type HigiLightProps = {
  title: string;
  subtitle: string;
};

const HigiLight: React.FC<HigiLightProps> = ({
  subtitle,
  title,
}: HigiLightProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  );
};
export default HigiLight;
