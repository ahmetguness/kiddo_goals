import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import IntroScreen from "../screens/IntroScreen/IntroScreen";
import SelectionScreen from "../screens/SelectionScreen/SelectionScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import { COLORS } from "../theme/colors";

const AppStackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Intro" component={IntroScreen} /> */}
      <Stack.Screen
        name="SelectionScreen"
        component={SelectionScreen}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitle: "Please Select Your User Mode",
          headerTitleStyle: {
            color: COLORS.CARD_TEXT,
          },
          headerStyle: {
            backgroundColor: COLORS.CARD,
          },
        }}
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AppStackNavigation;
