import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { PressableProps, useThemeColor, View } from "../Themed";
import { shadow } from "../shadow/Shadows";

export default function IconButton(
  props: PressableProps & {
    name: React.ComponentProps<typeof Ionicons>["name"];
    onPress: () => void;
    size?: "s" | "m" | number;
    color?: string;
    type?: "circle" | "primary" | "rounded";
  }
) {
  const { name, onPress, color, darkColor, lightColor, ...otherProps } = props;

  const iconColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );

  const size =
    typeof props.size === "number"
      ? props.size
      : props.size === "s"
      ? 20
      : props.size === "m"
      ? 30
      : 30;

  const containerSize = (size || 30) + 15;

  const backgroundColor = useThemeColor(
    { light: undefined, dark: undefined },
    "secondaryBackground"
  );
  const typeStyles =
    props.type === "circle"
      ? {
          width: containerSize,
          height: containerSize,
          borderRadius: 250,
          ...shadow.shadow2,
          backgroundColor,
        }
      : props.type === "primary"
      ? {
          width: containerSize,
          height: containerSize,
          borderRadius: 250,
          ...shadow.shadow2,
          backgroundColor,
        }
      : props.type === "rounded"
      ? {
          width: containerSize + 10,
          height: containerSize + 10,
          borderRadius: 10,
          ...shadow.shadow2,
          backgroundColor,
        }
      : {
          borderWidth: 0,
        };

  return (
    <Pressable onPress={onPress} {...otherProps}>
      <View
        style={[
          {
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
          },
          typeStyles,
          otherProps.disabled && {
            opacity: 0.5,
          },
        ]}
      >
        <Ionicons name={name} size={size || 25} color={color || iconColor} />
      </View>
    </Pressable>
  );
}
