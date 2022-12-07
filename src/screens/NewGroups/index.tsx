import { Alert } from "react-native";
import React, { useState } from "react";

import * as S from "./styles";
import { Button, Container, Input } from "@components/index";
import { Header } from "@features/index";
import { StatusBar } from "expo-status-bar";
import { HigiLight } from "@modules/index";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreat";
import AppError from "@utils/Error";

type NewGroupProps = {};

const NewGroup: React.FC<NewGroupProps> = ({}: NewGroupProps) => {
  const [group, setGroup] = useState<string | undefined>();

  const navigation = useNavigation();

  const handleNewGroup = async () => {
    if (group?.trim().length) {
      try {
        await groupCreate(group);
      } catch (err) {
        if (err instanceof AppError) {
          return Alert.alert("Nogo grupo", err.message);
        } else {
          return Alert.alert("Nogo grupo", "Não foi possivel criar novo grupo");
        }
      }
      navigation.navigate("players", { group });
    } else {
      Alert.alert("Novo groupo", "informe o nome do grupo");
    }
  };
  return (
    <Container>
      <Header showBackButton />
      <S.Content>
        <S.Icon />
        <HigiLight
          title="Nova turma"
          subtitle="Crie uma turmar para adicionar pessoas"
        />
        <Input
          value={group}
          onChangeText={setGroup}
          placeholder="Nome da turmna"
        />
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </S.Content>
    </Container>
  );
};
export default NewGroup;
