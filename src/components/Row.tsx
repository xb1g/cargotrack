import { View, ViewProps } from "./Themed";

export function Row(props: ViewProps) {
  const { style, children, ...rest } = props;
  return (
    <View
      style={[
        {
          flexDirection: "row",
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}

export function CenteredRow(props: ViewProps) {
  const { children, style, ...rest } = props;
  return (
    <View
      style={[
        {
          alignItems: "center",
          flexDirection: "row",
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}
