import { ViewProps } from "./Themed";
import { View } from "react-native";

export function Row({ children }: any) {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {children}
    </View>
  );
}

export function CenteredRow({ children }: any) {
  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      {children}
    </View>
  );
}
