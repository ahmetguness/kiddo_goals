import React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import SelectionCard from "../../components/cards/SelectionCard";
import { setSelectedLoginType } from "../../hooks/reduxtoolkit/Slices/AppSlice";
import { GeneralNavigationProp } from "../../types/navigation_type/NavigationType";
import { styles } from "./styles";
import { DESCRIPTIONS, IMAGES, UserMode } from "../../constants/app/userMode";

const SelectionScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<GeneralNavigationProp>();

  const handleModeSelection = (userMode: UserMode) => {
    dispatch(setSelectedLoginType(userMode));
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.root}>
      {Object.values(UserMode).map((mode) => (
        <SelectionCard
          key={mode}
          userMode={mode}
          descText={DESCRIPTIONS[mode]}
          onPress={() => handleModeSelection(mode)}
          image={IMAGES[mode]}
        />
      ))}
    </View>
  );
};

export default SelectionScreen;
