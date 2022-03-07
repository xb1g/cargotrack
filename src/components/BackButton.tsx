import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function BackButton({ navigation }: any) {
  return (
    <View>
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons name="ios-arrow-back" size={30} color="white" />
      </Pressable>
    </View>
  );
}
