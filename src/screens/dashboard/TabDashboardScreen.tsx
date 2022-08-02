import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";

import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../../types";
import { SafeTop } from "../../components/SafeTop";
import { CargoItem, CargoItemProps } from "./CargoItem";
import { TitleText } from "../../components/StyledText";
import { useContext, useState } from "react";
import { CenteredRow, Row } from "../../components/Row";
import { Ionicons } from "@expo/vector-icons";
import { AddIdModal } from "../../components/AddIdModal";
import IconButton from "../../components/buttons/IconButton";
import { AuthContext } from "../../services/auth/AuthContext";
import ModuleItem from "../../components/ModuleItem";

export default function TabDashboardScreen({
  navigation,
}: RootTabScreenProps<"TabDashboard">) {
  const { user } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <SafeTop />
      <AddIdModal visible={modalVisible} setVisible={setModalVisible} />
      <CenteredRow>
        <TitleText style={{ padding: 10 }}>Dashboard</TitleText>
        <IconButton
          name="add"
          onPress={() => setModalVisible(true)}
          style={{ marginLeft: "auto", padding: 10 }}
        />
      </CenteredRow>
      <SafeTop />
      <FlatList
        data={user?.modules}
        keyExtractor={(item, i) => {
          return item._id + i;
        }}
        renderItem={({ item }) => <ModuleItem module={item} />}
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
