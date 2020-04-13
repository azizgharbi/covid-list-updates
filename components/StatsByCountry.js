import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

// Libs
import { List } from "react-native-paper";

// Services
import { getAllStatsByCountries } from "./../services";

export default function AllStats() {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllStatsByCountries().then((data) => {
      setStats(data);
      setLoading(true);
    });
  }, []);

  return loading ? (
    <React.Fragment>
      {stats.map(({ country, cases, todayCases, deaths }, index) => (
        <List.Section key={index}>
          <List.Accordion
            title={country}
            left={(props) => <List.Icon {...props} icon="chevron-right" />}
          >
            <List.Item title={` Cases : ${cases}`} />
            <List.Item title={` Today Cases : ${todayCases}`} />
            <List.Item title={` Deaths : ${deaths}`} />
          </List.Accordion>
        </List.Section>
      ))}
    </React.Fragment>
  ) : (
    <ActivityIndicator size="large" color="#ffbe76" />
  );
}
