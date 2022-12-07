import { PLAYER_COLLECTION } from "@config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppError from "@utils/Error";
import { PlayerStorageDTO } from "src/@types/playerStorageDTO";
import playersGetByGroup from "./playersGetByGroup";

const playerAddByGroup = async (newPlayer: PlayerStorageDTO, group: string) => {
  try {
    const storagePLayers = await playersGetByGroup(group)

    const playerAlreadyExists = storagePLayers.filter((player)=> player.name === newPlayer.name)

    if(playerAlreadyExists.length > 0){
      throw new AppError('Essa pessoa já esta adicionada em um time')
    }

    const storage = [...storagePLayers, newPlayer]
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, JSON.stringify(storage))
  } catch (err) {
    throw err;
  }
};

export default playerAddByGroup;
