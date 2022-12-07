import React from "react";

import * as S from "./styles";

type ListEmpityProps = {
  message: string;
};

const ListEmpity: React.FC<ListEmpityProps> = ({
  message,
}: ListEmpityProps) => {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
};
export default ListEmpity;
