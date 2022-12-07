import { Alert, FlatList, TextInput } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import AppError from "@utils/Error";
import { HigiLight, TextField } from "@modules/index";
import { PlayerStorageDTO } from "src/@types/playerStorageDTO";
import groupRemoveByName from "@storage/group/groupRemoveByName";
import playerAddByGroup from "@storage/players/playerAddByGroups";
import { Button, Container, ListEmpity, Loading } from "@components/index";
import { Header, PlayerCards, TabsPlayers } from "@features/index";
import playersRemoveByGroup from "@storage/players/playerRemoveByGroup";
import playersGetByGroupAndTeam from "@storage/players/playersGetByGroupAndTeam";

type PlayerProps = {};
type RouteParams = {
  group: string;
};
const Player: React.FC<PlayerProps> = ({}: PlayerProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [player, setPlayer] = useState<PlayerStorageDTO[]>([]);
  const [newPlayerName, setNewPlayerName] = useState<string>("");
  const [team, setTeam] = useState<"Time A" | "Time B">("Time A");
  
  const router = useRoute();
  const { navigate } = useNavigation();
  const newPLayerNameInputRef = useRef<TextInput>(null);
  
  const { group } = router.params as RouteParams;

  const fetchPlayerByTeam = async () => {
    try {
      setIsLoading(true)
      const playerByTeam = await playersGetByGroupAndTeam(group, team);
      if (playerByTeam) {
        setPlayer(playerByTeam);
      }
    } catch (err) {
      Alert.alert(
        "Pessoas",
        "Não foi possivel carrega as pessoal do time selecionado"
      );
    }finally{
      setIsLoading(false)
    }
  };

  const handleAddPlayer = async () => {
    if (newPlayerName?.trim().length === 0) {
      return Alert.alert("Nova pessoal", "Informe uma nova pessoal");
    }
    const newPLayer = {
      name: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup(newPLayer, group);

      fetchPlayerByTeam();
      setNewPlayerName("");

      newPLayerNameInputRef.current?.blur();
    } catch (err) {
      if (err instanceof AppError) {
        Alert.alert("Nova pessoal", err.message);
      }
    }
  };

  const handleRemovePlayer = async (playerName: string) => {
    try {
      await playersRemoveByGroup(playerName, group);
      fetchPlayerByTeam();
    } catch (err) {
      Alert.alert("Remover pessoa", "Não foi possivel remove essa pessoa.");
    }
  };

  const groupRemove = async () => {
    try {
      await groupRemoveByName(group);
      navigate("groups");
    } catch (err) {
      Alert.alert("Remover pessoa", "Não foi possivel remove essa pessoa.");
    }
  };

  const handleRemoveGroup = async () => {
    Alert.alert("Remover", "Deseja remover grupo?", [
      { text: "Nao", style: "cancel" },
      { text: "Sim", onPress: () => groupRemove() },
    ]);
  };

  useEffect(() => {
    fetchPlayerByTeam();
  }, [team]);

  return (
    isLoading ? <Loading/> : <Container>
    <Header showBackButton />
    <HigiLight title={group} subtitle="adicione a galera e separe os time" />
    <TextField
      ref={newPLayerNameInputRef}
      placeholder="Nome do usuario"
      value={newPlayerName}
      onChangeText={setNewPlayerName}
      onPressIcon={() => handleAddPlayer()}
      onSubmitEditing={handleAddPlayer}
      returnKeyType="done"
    />
    <TabsPlayers
      amountPlayersForTeam={0}
      onChange={(teamName) => setTeam(teamName)}
    />
    <FlatList
      keyExtractor={(item) => item.name}
      ListEmptyComponent={<ListEmpity message="Não ha pessoas nesse time" />}
      data={player}
      renderItem={({ item }) => {
        return (
          <PlayerCards
            name={item.name}
            onRemove={(name) => handleRemovePlayer(name)}
          />
        );
      }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        { paddingBottom: 100 },
        player.length === 0 && { flex: 1 },
      ]}
    />
    <Button
      variant="DANGER"
      title="Remove turmar!"
      onPress={async () => {
        handleRemoveGroup();
      }}
    />
  </Container>
  );
};
export default Player;
