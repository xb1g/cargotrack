import { Children } from "react";
import { Pressable } from "react-native";
import { shadow } from "./shadow/Shadows";
import { PressableProps, useThemeColor } from "./Themed";

export function Button(props: PressableProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor || "#c43636", dark: darkColor || "#44f" },
    "background"
  );

  return (
    <Pressable
      style={[
        {
          backgroundColor,
          padding: 10,
          borderRadius: 10,
          margin: 10,
          ...shadow.shadow1,
        },
        style,
      ]}
      {...otherProps}
    />
  );
}
