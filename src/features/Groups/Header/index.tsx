import React from "react";
import * as S from "./styles";
import Logo from "@assets/logo.png";
import { useNavigation } from "@react-navigation/native";

type HeaderProps = {
  showBackButton?: boolean;
};

const Header: React.FC<HeaderProps> = ({
  showBackButton = false,
}: HeaderProps) => {
  const navigation = useNavigation()
  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton  onPress={()=> navigation.navigate("groups")}>
          <S.Icon />
        </S.BackButton>
      )}
      <S.Logo source={Logo} />
    </S.Container>
  );
};
export default Header;
