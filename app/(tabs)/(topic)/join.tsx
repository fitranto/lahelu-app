import { StyleSheet, Text, View } from "react-native";

export default function FreshScreen() {
  return (
    <View style={styles.container}>
      <Text>Login untuk melihat halaman ini</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    padding: 15,
  },
});
