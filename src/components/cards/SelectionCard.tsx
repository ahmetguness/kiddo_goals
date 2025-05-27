import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../../theme/colors";

interface SelectionCardProps {
  userMode: string;
  descText: string;
  onPress: () => void;
  image: ImageSourcePropType;
}

const SelectionCard: React.FC<SelectionCardProps> = ({
  userMode,
  onPress,
  descText,
  image,
}) => {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.con1}>
        <Text style={styles.text1}>{userMode}:</Text>
        <Image style={styles.image} source={image} />
      </View>
      <View>
        <Text style={styles.text2}>{descText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SelectionCard;

const styles = StyleSheet.create({
  root: {
    width: "80%",
    backgroundColor: COLORS.CARD,
    height: "26%",
    borderRadius: 20,
    padding: 10,
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.CARD_TEXT,
  },
  text2: {
    fontSize: 16,
    color: COLORS.CARD_TEXT,
    paddingLeft: 10,
  },
  con1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  image: {
    height: 40,
    width: 40,
  },
});
