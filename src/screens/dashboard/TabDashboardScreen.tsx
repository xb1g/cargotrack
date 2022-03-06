import { FlatList, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../../types";
import { SafeTop } from "../../components/SafeTop";
import { CargoItem } from "./CargoItem";
import { TitleText } from "../../components/StyledText";

export default function TabDashboardScreen({
  navigation,
}: RootTabScreenProps<"TabDashboard">) {
  return (
    <View style={styles.container}>
      <SafeTop />

      {/* <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      /> */}
      <FlatList
        ListHeaderComponent={() => (
          <TitleText style={{ marginTop: 20, padding: 10 }}>
            Dashboard
          </TitleText>
        )}
        data={[
          {
            type: "durian",
            plate: "abd213",
          },
        ]}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => <CargoItem item={item} />}
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
