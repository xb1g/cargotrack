import { FlatList, Modal, Pressable, StyleSheet, TextInput } from "react-native";

import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../../types";
import { SafeTop } from "../../components/SafeTop";
import { CargoItem, CargoItemProps } from "./CargoItem";
import { TitleText } from "../../components/StyledText";
import { useState } from "react";
import { CenteredRow, Row } from "../../components/Row";
import { Ionicons } from "@expo/vector-icons";
import { AddIdModal } from "../../components/AddIdModal";

export default function TabDashboardScreen({
  navigation,
}: RootTabScreenProps<"TabDashboard">) {
  const [modalVisible, setModalVisible] = useState(false);
  const [CargoItems, setCargoItems] = useState<CargoItemProps[]>([
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
    {
      type: "mango",
      plate: "หก2733",
      temperature: 0,
      location: { latitude: 200, longitude: 0 },
    },
  ]);
  return (
    <View style={styles.container}>
      <SafeTop />
      <AddIdModal visible={modalVisible} setVisible={setModalVisible}/>
      <CenteredRow>
        <TitleText style={{ padding: 10 }}>Dashboard</TitleText>
        <Pressable
          style={{ marginLeft: "auto" }}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Ionicons name="ios-add" size={30} color="black" />
        </Pressable>
      </CenteredRow>
      <SafeTop />
      <FlatList
        // ListHeaderComponent={() => (

        // )}
        data={CargoItems}
        keyExtractor={(item, i) => {
          return item.type + i;
        }}
        renderItem={({ item }) => (
          <CargoItem {...item} navigation={navigation} />
        )}
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
