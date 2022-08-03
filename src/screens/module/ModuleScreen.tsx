import React, { useContext } from "react";
import { Dimensions, FlatList, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
import MapView, { Marker } from "react-native-maps";
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
    <ScrollView>
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
      <View style={{ marginHorizontal: 20 }}>
        <Text>{module.status}</Text>
        <SubtitleText> id: {module.id}</SubtitleText>
      </View>
      <CenteredRow style={{ alignSelf: "center", margin: 10 }}>
        <IconButton
          name={moduleData.status == "active" ? "pause" : "play"}
          type="rounded"
          onPress={
            moduleData.status == "inactive" ? onTriggerModule : onStopModule
          }
        />
      </CenteredRow>
      {moduleData.status == "active" && moduleData?.data?.data && (
        <View style={{ padding: 10 }}>
          <SubtitleText>Temperature</SubtitleText>
          <LineChart
            data={{
              labels: moduleData?.data?.data.map((d) => {
                return new Date(d.timeStamp).toLocaleTimeString(); // return typeof new Date();
              }),
              datasets: [
                {
                  data: moduleData?.data?.data.map((d) => Number(d.temp)),
                },
              ],
            }}
            // width={Dimensions.get("window").width} // from react-native
            width={Dimensions.get("window").width - 40} // from react-native
            height={220}
            yAxisSuffix="°C"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                margin: 20,
                borderRadius: 16,
                alignSelf: "center",
                paddingVertical: 8,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
            style={{
              alignSelf: "center",
              marginVertical: 8,
              marginHorizontal: 25,
              paddingVertical: 8,
              borderRadius: 16,
            }}
          />
          <SubtitleText>Humidity</SubtitleText>
          <LineChart
            data={{
              labels: moduleData?.data?.data.map((d) => {
                return new Date(d.timeStamp).toLocaleTimeString(); // return typeof new Date();
              }),
              datasets: [
                {
                  data: moduleData?.data?.data.map((d) => Number(d.humidity)),
                },
              ],
            }}
            // width={Dimensions.get("window").width} // from react-native
            width={Dimensions.get("window").width - 40} // from react-native
            height={220}
            yAxisSuffix="%"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                margin: 20,
                borderRadius: 16,
                alignSelf: "center",
                paddingVertical: 8,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
            style={{
              alignSelf: "center",
              marginVertical: 8,
              marginHorizontal: 25,
              paddingVertical: 8,
              borderRadius: 16,
            }}
          />

          <SubtitleText>Locations</SubtitleText>
          <MapView
            style={{
              width: "95%",
              height: 200,
              alignSelf: "center",
              borderRadius: 16,
            }}
          >
            {moduleData?.data?.data?.map((d, index) => {
              return (
                <Marker
                  key={d.timeStamp + index + "MARK"}
                  coordinate={{
                    latitude: Number(d.location.lat),
                    longitude: Number(d.location.lng),
                  }}
                />
              );
            })}
          </MapView>
          {/* <FlatList
          data={moduleData.data.data}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{item.temp}Data</Text>
              </View>
            );
          }}
        /> */}
        </View>
      )}
    </ScrollView>
  );
}
