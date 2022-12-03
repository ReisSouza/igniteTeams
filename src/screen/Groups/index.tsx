import {  Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import S from './styles'
const  Groups = ()=> {
  return (
    <View style={S.container}>
      <Text>Groups</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default Groups