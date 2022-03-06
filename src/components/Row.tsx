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
