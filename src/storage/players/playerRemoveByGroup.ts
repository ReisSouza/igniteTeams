import { PLAYER_COLLECTION } from "@config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDTO } from "src/@types/playerStorageDTO";
import playersGetByGroup from "./playersGetByGroup";

const playersRemoveByGroup = async (playerName:string, group: string) => {
  try {
    const storage =  await playersGetByGroup(group)
    
    const filtered = storage.filter((player)=> player.name !== playerName)

    const players = JSON.stringify(filtered)

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players)

  } catch (err) {
    throw err;
  }
};

export default playersRemoveByGroup;
