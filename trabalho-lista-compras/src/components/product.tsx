import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { useState } from "react";

type ProductProps = {
  name: string;
  onRemove: () => void;
};

export function Product({ name, onRemove }: ProductProps) {
  const [checked, setChecked] = useState(false);

  function handleToggleCheck() {
    setChecked(!checked);
  }

  return (
    <View style={styles.product}>
      <TouchableOpacity onPress={handleToggleCheck} style={styles.check}>
        {checked ? (
          <Image style={styles.checkIcon} source={require("../img/Layer_1.png")}/>
        ) : (
          <Image style={styles.uncheckedCircle} source={require("../img/layer1.png")}/>
        )}
      </TouchableOpacity>

      <Text style={[styles.listTitle, checked && styles.listTitleChecked]}> {name} </Text>

      <TouchableOpacity onPress={onRemove}>
        <Image style={styles.trash} source={require("../img/layer2.png")} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    backgroundColor: "#F2F2F2",
    marginBottom: 8, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },

  check: {
    width: 24,
    height: 24,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  uncheckedCircle: {
    width: 24,
    height: 24,
    padding: 3.273,
    justifyContent: "center",
    alignItems: "center",
  },

  checkIcon: {
    width: 24,
    height: 24,
    padding: 3.273,
    justifyContent: "center",
    alignItems: "center",
  },

  listTitle: {
    flex: 1,
    color: "#333",
    fontSize: 14,
  },

  listTitleChecked: {
    textDecorationLine: "line-through",
    color: "#808080",
  },

  trash: {
    width: 16,
    height: 16,
    marginLeft: 12,
    tintColor: "#808080",
  },
});

