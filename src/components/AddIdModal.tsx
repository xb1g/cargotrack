import React, { useContext } from "react";
import { Button } from "./StyledButton";
import { AddModule } from "../services/requests/modules";
import { SafeBottom, SafeTop } from "./SafeTop";
import { TitleText } from "./StyledText";
import { Modal } from "react-native";
import { Input, Text, View } from "./Themed";
import IconButton from "./buttons/IconButton";
import { AuthContext } from "../services/auth/AuthContext";

export function AddIdModal({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}) {
  const [value, setValue] = React.useState("");
  const { linkModule } = useContext(AuthContext);
  return (
    <Modal visible={visible}>
      <View style={{ flex: 1, padding: 20 }}>
        <SafeTop />
        <TitleText style={{ padding: 10 }}>Add ID</TitleText>
        <Text style={{ padding: 10 }}>add your module id</Text>

        <Input value={value} onChangeText={setValue} />
        <Button
          onPress={() => {
            console.log(value);
            linkModule(value)
              .then((res) => {
                setVisible(false);
              })
              .catch((err) => {
                console.error(err);
              });
          }}
        >
          <Text>oik</Text>
        </Button>
        <IconButton
          name="close"
          onPress={() => setVisible(false)}
          style={{ marginTop: "auto", margin: 10 }}
        />
        <SafeBottom />
      </View>
    </Modal>
  );
}
