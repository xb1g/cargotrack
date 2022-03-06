import { FlatList, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../../types";
import { SafeTop } from "../../components/SafeTop";
import { CargoItem } from "./CargoItem";
import { TitleText } from "../../components/StyledText";
import { useState } from "react";

export default function TabDashboardScreen({
  navigation,
}: RootTabScreenProps<"TabDashboard">) {
  const [CargoItems, setCargoItems] = useState([
    {
      type: "durian",
      plate: "กบ2213",
      temperature: 0,
      location: { latitude: 0, longitude: 0 },
    },
    {
      type: "durian",
      plate: "หก2134",
      temperature: 0,
      location: { latitude: 200, longitude: 0 },
    },
  ]);
  return (
    <View style={styles.container}>
      <SafeTop />
      <FlatList
        ListHeaderComponent={() => (
          <TitleText style={{ marginTop: 20, padding: 10 }}>
            Dashboard
          </TitleText>
        )}
        data={CargoItems}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => <CargoItem {...item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
