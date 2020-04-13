import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
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
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <AllStats></AllStats>
        <StatsByCountry></StatsByCountry>
      </ScrollView>
    </SafeAreaView>
  );
}
