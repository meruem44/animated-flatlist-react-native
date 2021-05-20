import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  StatusBar,
  Image,
  ImageBackground,
  Animated,
} from "react-native";

import { DATA } from "./services/data";
import { UserDTO } from "./dtos/UserDTO";

import { Card } from "./components/Card";
import { metrics } from "./styles/metrics";
import BG from "./assets/BG.jpg";

const App: React.FC = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <ImageBackground blurRadius={80} source={BG} style={styles.container}>
      <StatusBar
        backgroundColor="#0099cc"
        barStyle="light-content"
        translucent
      />

      <FlatList<UserDTO>
        data={DATA}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollY } } },
        ])}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: metrics.spacing,
          paddingTop: 28,
        }}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => (
          <Card scrollY={scrollY} item={item} index={index} />
        )}
      />
    </ImageBackground>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
});
