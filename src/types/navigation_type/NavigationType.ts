import { NavigationProp } from "@react-navigation/native";
import LoginScreen from "../../screens/LoginScreen/LoginScreen";

export type RootStackParamList = {
  IntroScreen: undefined;
  SelectionScreen: undefined;
  LoginScreen: undefined;
};

export type GeneralNavigationProp = NavigationProp<RootStackParamList>;
