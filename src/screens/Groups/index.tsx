import { Alert, FlatList } from "react-native";
import React, { useCallback,  useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { HigiLight } from "@modules/index";
import ListEmpity from "@components/ListEmpity";
import { GroupCard, Header } from "@features/index";
import { Button, Container, Loading } from "@components/index";
import { groupGetAll } from "@storage/group/groupGetAll";

const Groups = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation()
  
  const  fetchGroups =  async () => {
    setIsLoading(true)
    try{
     const data = await groupGetAll()
     setGroups(data)
     
    }catch(err){
      Alert.alert('Turmas', "Não foi possivel criar turmar")
    }finally{
      setIsLoading(false)
    }
  } 

  const handleNewGroup = () => {
    navigation.navigate('new')
  }

  const handleOpenGroup = (nameGroup:string) => {
    navigation.navigate('players', {group:nameGroup})
  }

 useFocusEffect(useCallback(()=>{
   fetchGroups()
 },[]))

  return (
    isLoading ? <Loading/> :
    <Container>
      <Header />
      <HigiLight title="Turma" subtitle="Jogue com a sua turma" />
      <FlatList
        data={groups}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpity message="Que tal cadastrar a primeira  turma ?" />
        }
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return <GroupCard title={item} onPress={() => handleOpenGroup(item)} />;
        }}
      />
      <Button title="Criar turmar" onPress={handleNewGroup} />
    </Container>
  );
};

export default Groups;
