import React from "react";
import { Image, StyleSheet } from "react-native";

interface fruitTypes {
  type: "mango" | "durian" | string;
}

export function FruitIcons({
  type,
  size,
}: {
  type: fruitTypes["type"];
  size?: number;
}) {
  return (
    <Image
      style={[styles.fruitIcon, !!size && { width: size, height: size }]}
      resizeMethod="scale"
      resizeMode="contain"
      source={
        type === "durian"
          ? require("../../assets/icons/durian.png")
          : require("../../assets/icons/mango.png")
      }
    />
  );
}

const styles = StyleSheet.create({
  fruitIcon: {
    width: 45,
    height: 45,
  },
});
