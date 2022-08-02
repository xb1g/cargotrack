import React, { useContext } from "react";
import { DashboardTabScreenProps, RootTabScreenProps } from "../../../types";
import BackButton from "../../components/BackButton";
import IconButton from "../../components/buttons/IconButton";
import { CenteredRow } from "../../components/Row";
import { SafeTop } from "../../components/SafeTop";
import { SubtitleText, TitleText } from "../../components/StyledText";
import { Input, Text, View } from "../../components/Themed";
import { AuthContext } from "../../services/auth/AuthContext";

export default function ModuleScreen({
  navigation,
  route,
}: DashboardTabScreenProps<"Module">) {
  const { module } = route.params;
  const { saveModule, triggerModule, stopModule } = useContext(AuthContext);
  const [moduleData, setModuleData] = React.useState(module);
  const [error, setError] = React.useState("");
  const [editing, setEditing] = React.useState(false);

  const onEdit = () => {
    setEditing(true);
  };

  const onSave = () => {
    setEditing(false);
    saveModule(moduleData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  const onTriggerModule = () => {
    triggerModule(moduleData.id)
      .then((res) => {
        console.log(res);
        setModuleData(res);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  const onStopModule = () => {
    stopModule(moduleData.id)
      .then((res) => {
        console.log(res);
        setModuleData(res);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  const onChangeName = (name: string) => {
    setModuleData({ ...moduleData, name });
  };

  return (
    <View>
      <SafeTop />
      <BackButton navigation={navigation} />
      {!!error && <SubtitleText style={{ color: "red" }}>{error}</SubtitleText>}
      <CenteredRow
        style={{ justifyContent: "space-between", marginHorizontal: 20 }}
      >
        {editing ? (
          <Input size="l" value={moduleData.name} onChangeText={onChangeName} />
        ) : (
          <TitleText>{moduleData.name || "unnamed"}</TitleText>
        )}
        <IconButton
          name={editing ? "checkmark" : "pencil"}
          onPress={editing ? onSave : onEdit}
        />
      </CenteredRow>
      <SubtitleText> id: {module.id}</SubtitleText>
      <CenteredRow style={{ alignSelf: "center", margin: 10 }}>
        <IconButton
          name={moduleData.status == "active" ? "pause" : "play"}
          type="rounded"
          onPress={
            moduleData.status == "inactive" ? onTriggerModule : onStopModule
          }
        />
      </CenteredRow>
    </View>
  );
}
