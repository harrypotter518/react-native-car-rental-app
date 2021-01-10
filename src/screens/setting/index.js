import React from "react";
import { Text, View } from "react-native";
import AppStatusBar from "../../utilities/AppStatusBar";
import { commonNavigation } from "../../utilities/AppUtils";
import { name } from "../../utilities/Constants";
const THEME_COLOR = "#0BB5FF";
const Setting = props => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppStatusBar backgroundColor={THEME_COLOR} barStyle="light-content" />

      <Text>{Setting}</Text>
    </View>
  );
};
Setting.navigationOptions = commonNavigation("Setting");

export default Setting;
