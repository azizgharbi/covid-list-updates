import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

// Libs
import { List } from "react-native-paper";

// Services
import { getAllStats } from "./../services";

export default function AllStats() {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllStats().then((data) => {
      setStats(data);
      setLoading(true);
    });
  }, []);

  return loading ? (
    <List.Section>
      <List.Accordion
        title="All over the world"
        left={(props) => <List.Icon {...props} icon="chart-line" />}
      >
        <List.Item title={` Cases : ${stats.cases}`} />
        <List.Item title={` Today Cases : ${stats.todayCases}`} />
        <List.Item
          title={` Cases Per One Million : ${stats.casesPerOneMillion}`}
        />
        <List.Item title={` Deaths : ${stats.deaths}`} />
        <List.Item title={` To day Deaths : ${stats.todayDeaths}`} />
        <List.Item title={` Active : ${stats.active}`} />
        <List.Item title={` Tests : ${stats.tests}`} />
        <List.Item title={` Critical : ${stats.critical}`} />
      </List.Accordion>
    </List.Section>
  ) : (
    <ActivityIndicator size="y" color="#ffbe76" />
  );
}
