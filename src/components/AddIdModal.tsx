import { View, Text, Modal, TextInput } from "react-native";
import React from "react";
import { Button } from "./StyledButton";
import { AddModule } from "../services/requests/add-module";

export function AddIdModal({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}) {
  const [value, setValue] = React.useState("");
  return (
    <Modal visible={visible}>
      <Text style={{ fontSize: 20 }}>Add ID</Text>
      <TextInput
        value={value}
        onChangeText={(text) => {
          setValue(text);
        }}
      />
      <Button
        onPress={() => {
          console.log(value);
          setVisible(false);
          AddModule(value, "fuse")
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        <Text>oik</Text>
      </Button>
    </Modal>
  );
}
