import React from "react";

import * as S from "./styles";

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
  return <S.Container>{children}</S.Container>;
};
export default Container;
