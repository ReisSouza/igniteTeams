import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Group, NewGroup, Player } from "@screens/index";

const { Navigator, Screen } = createNativeStackNavigator();
const AppRoutues = () => {
  return (
    <Navigator screenOptions={{headerShown:false}}>
      <Screen name="groups" component={Group} />
      <Screen name="new" component={NewGroup} />
      <Screen name="players" component={Player} />
    </Navigator>
  );
}; 


export default AppRoutues