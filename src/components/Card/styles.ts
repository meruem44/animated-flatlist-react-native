import styled from "styled-components/native";
import { Animated } from "react-native";
import { metrics } from "../../styles/metrics";

export const Container = styled(Animated.View)`
  flex-direction: row;
  padding: ${metrics.spacing}px;
  margin-bottom: ${metrics.spacing}px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const Image = styled.Image`
  width: ${metrics.avatar_size}px;
  height: ${metrics.avatar_size}px;
  border-radius: ${metrics.avatar_size};
  margin-right: ${metrics.spacing / 2};
`;

export const Content = styled.View``;

export const Name = styled.Text`
  font-size: 22;
  font-weight: bold;
`;

export const Job = styled.Text`
  font-size: 18;
  opacity: 0.7px;
`;

export const Email = styled.Text`
  font-size: 14;
  opacity: 0.8px;
  color: #0099cc;
`;
