
import {NavigationContainer} from '@react-navigation/native'
import AppRoutues from './app.routes'
import { View } from "react-native";
import { useTheme } from 'styled-components/native';
const Routes = () => {
  const { COLORS } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_700 }}>
    <NavigationContainer>
      <AppRoutues/>
    </NavigationContainer>
    </View>
  )
}

export default Routes