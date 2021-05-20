import React from "react";
import { Container, Image, Content, Name, Job, Email } from "./styles";
import { Animated } from "react-native";

import { UserDTO } from "../../dtos/UserDTO";
import { metrics } from "../../styles/metrics";

interface ICardProps {
  item: UserDTO;
  index: number;
  scrollY: Animated.Value;
}

const Card: React.FC<ICardProps> = ({ item, index, scrollY }) => {
  const inputRange = [
    -1,
    0,
    metrics.item_size * index,
    metrics.item_size * (index + 1),
  ];

  const opacityInputRange = [
    -1,
    0,
    metrics.item_size * index,
    metrics.item_size * (index + 0.5),
  ];

  const scale = scrollY.interpolate({
    inputRange,
    outputRange: [1, 1, 1, 0],
  });

  const opacity = scrollY.interpolate({
    inputRange: opacityInputRange,
    outputRange: [1, 1, 1, 0],
  });

  return (
    <Container
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 20,
        transform: [{ scale }],
        opacity,
      }}
    >
      <Image source={{ uri: item.image }} />
      <Content>
        <Name>{item.name}</Name>
        <Job>{item.jobTitle}</Job>
        <Email>{item.email}</Email>
      </Content>
    </Container>
  );
};

export { Card };
