import { GROUP_COLLECTION } from "@config/env/index";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const groupGetAll = async () => {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);
    const groups: string[] = storage ? JSON.parse(storage) : [];
    return groups;
  } catch (error) {
    throw error;
  }
};
