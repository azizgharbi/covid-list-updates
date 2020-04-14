import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text } from "react-native";
import Constants from "expo-constants";

// Components
import AllStats from "./components/AllStats";
import StatsByCountry from "./components/StatsByCountry";

// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: "#dff9fb",
    marginHorizontal: 5,
  },
  section: {
    marginTop: 25,
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text>Here you can find updates about COVID-19:</Text>
        <AllStats style={styles.section}></AllStats>
        <StatsByCountry style={styles.section}></StatsByCountry>
      </ScrollView>
    </SafeAreaView>
  );
}
