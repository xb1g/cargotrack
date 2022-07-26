import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, ViewProps } from "./Themed";

export function SafeTop(props: ViewProps) {
  const insets = useSafeAreaInsets();
  const { style, lightColor, darkColor, ...otherProps } = props;
  return (
    <View
      style={[
        {
          height: insets.top,
          backgroundColor: "transparent",
        },
        style,
      ]}
    />
  );
}

export function SafeBottom(props: ViewProps) {
  const insets = useSafeAreaInsets();
  const { style, lightColor, darkColor, ...otherProps } = props;
  return (
    <View
      style={[
        {
          height: insets.bottom,
          backgroundColor: "transparent",
        },
        style,
      ]}
      {...otherProps}
    />
  );
}
