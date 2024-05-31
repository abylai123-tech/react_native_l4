import { Text, View, ActivityIndicator } from "react-native";

export const Loading = () => {
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" color="blue" />
      <Text style={{ marginTop: 20 }}>Loading...</Text>
    </View>
  );
};
