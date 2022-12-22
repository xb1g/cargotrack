import { FlatList, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../../types";
import { useContext } from "react";
import { AuthContext, Module } from "../../services/auth/AuthContext";

export default function TabHistoryScreen({
  navigation,
}: RootTabScreenProps<"TabHistory">) {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={user?.modules}
        keyExtractor={(item, i) => {
          return item._id + i;
        }}
        renderItem={({ item }) => <HistoryList module={item} />}
      />
    </View>
  );
}

function HistoryList({ module }: { module: Module }) {
  console.log(module.dataHistory);
  return (
    <View>
      <Text>{module.name}</Text>
      <FlatList data={module.dataHistory} renderItem={HistoryItem} />
    </View>
  );
}

const HistoryItem = ({ item }: { item: any }) => {
  return <Text>{item}</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
