import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
// import styled from "styled-components";

// const Container = styled.View`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
// `;

// const InnerContainer = styled(Container)`
//   background-color: red;
// `;
const weatherOptions = {
  Thunderstorm: {
    iconName: "thunderstorm",
    gradient: ["#373B44", "#4286f4"],
  },
  Drizzle: {
    iconName: "water",
    gradient: ["#89F7FE", "#66A6FF"],
  },
  Rain: {
    iconName: "rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "비옴 비옴",
    subtitle: "오늘은 꾸무룩한 날씨에요 😞",
  },
  Snow: {
    iconName: "snow",
    gradient: ["#7DE2FC", "#B9B6E5"],
  },
  Atmosphere: {
    iconName: "partly-sunny",
    gradient: ["#89F7FE", "#66A6FF"],
  },
  Clear: {
    iconName: "sunny",
    gradient: ["#FF7300", "#FEF253"],
  },
  Clouds: {
    iconName: "cloud",
    gradient: ["#304352", "#D7D2CC"],
    title: "구름 구름",
    subtitle: "제 마음처럼 우울한 날씨에요.",
  },
  Mist: {
    iconName: "partly-sunny",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Dust: {
    iconName: "partly-sunny",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Haze: {
    iconName: "partly-sunny",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "Just don't go outside.",
  },
};
export default function Weather({ temp, condition }) {
  return (
    <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <Ionicons style={styles.icon} name={weatherOptions[condition].iconName} size={90} color="white" />
        <Text style={styles.temp}>
          {temp}
          <Text style={styles.unit}>℃</Text>
        </Text>
      </View>
      <View style={{ ...styles.halfContainer2, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 70,
    color: "white",
    fontWeight: "700",
  },
  icon: {
    fontSize: 150,
  },
  unit: {
    fontSize: 60,
  },
  halfContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer2: {
    flex: 1.2,
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "500",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "white",
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
