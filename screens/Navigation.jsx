import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./Home";
import { FullPost } from "./FullPost";

const Stack = createNativeStackNavigator();

{
  /* <Routes>
    <Route path='/home' elem={<Home/>}/>
</Routes> */
}
// ===
{
  /* <Stack.Navigator>
    <Stack.Screen/>
</Stack.Navigator> */
}

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Главный" }}
        />
        <Stack.Screen
          name="FullPost"
          component={FullPost}
          options={{ title: "Пост" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
