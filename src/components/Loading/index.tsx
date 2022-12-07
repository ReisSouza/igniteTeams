import React from "react";

import * as S from "./styles";

type LoadingProps = {};

const Loading: React.FC<LoadingProps> = ({}: LoadingProps) => {
  return (
    <S.Container>
      <S.Loading />
    </S.Container>
  );
};
export default Loading;
