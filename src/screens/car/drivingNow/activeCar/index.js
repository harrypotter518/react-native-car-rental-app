import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "./styles";
const ActiveCarScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ paddingLeft: 10, fontSize: 20, fontWeight: "500" }}>
        Toyota Supra
      </Text>
      <Text style={{ paddingLeft: 10, fontSize: 14, fontWeight: "normal" }}>
        VCG 7335
      </Text>
      <View style={styles.subContainer}>
        <Image
          style={styles.tinyLogo}
          source={require("../../../../../assets/reserved.png")}
        />
      </View>
      <View style={styles.subContent}>
        <View>
          <Text style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: 12 }}>
            Car Type
          </Text>
          <Text>Sedan</Text>
        </View>
        <View>
          <Text style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: 12 }}>
            Seater
          </Text>
          <Text>6</Text>
        </View>
        <View>
          <Text style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: 12 }}>
            Transmission
          </Text>
          <Text>Automatic</Text>
        </View>
      </View>
      <View style={styles.statusContent}>
        <Text style={{ fontSize: 16, color: "rgba(0, 0, 0, 0.6)" }}>
          Booking starts at
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "rgba(0, 0, 0, 0.6)",
            fontWeight: "500"
          }}
        >
          Wed 09/09/2020
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          marginBottom: 20,
          borderWidth: 0.5,
          borderColor: "#ddd"
        }}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          // props.navigation.navigate("Reservation");
        }}
      >
        <Text style={styles.buttonContent}>START DRIVING</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActiveCarScreen;
