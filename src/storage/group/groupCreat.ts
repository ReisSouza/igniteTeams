import AsyncStorage from "@react-native-async-storage/async-storage";

import AppError from "@utils/Error";
import { groupGetAll } from "./groupGetAll";
import { GROUP_COLLECTION } from "@config/env/index";


export const groupCreate = async (groupName: string) => {
  try {
    const stoaredGroups = await groupGetAll();
    const groupAlreadyExists = stoaredGroups.some((item) => item === groupName);
    if (groupAlreadyExists) {
      throw new AppError("Já existe um grupo cadastrado com esse nome");
    }

   
    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...stoaredGroups, groupName])
    );
  } catch (error) {
    throw error;
  }
};
