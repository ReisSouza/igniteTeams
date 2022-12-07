import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@config/env"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { groupGetAll } from "./groupGetAll"

const groupRemoveByName =  async (groupDeleted:string)=> {
  try {
    const storageGroups = await groupGetAll()
    const groups = storageGroups.filter((group) => group !== groupDeleted)

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups))
    await AsyncStorage.removeItem(`${GROUP_COLLECTION}-${groupDeleted}`)

  } catch (error) {
    throw error
  }
}

export default groupRemoveByName