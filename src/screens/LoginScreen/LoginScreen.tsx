import { Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../hooks/reduxtoolkit/store";

const LoginScreen = () => {
  const aaa = useSelector((state: RootState) => state.app.userMode);
  console.log(aaa);
  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;
