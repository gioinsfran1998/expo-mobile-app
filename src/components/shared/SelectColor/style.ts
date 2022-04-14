import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { MotiView } from 'moti';

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 30px;
  /* background-color: #8c8c8c; */
`;

export const Circle = styled.TouchableOpacity.attrs(() => {
  return { activeOpacity: 0.5 };
})`
  height: 20px;
  width: 20px;

  background-color: ${({ color }) => color};

  border-radius: 50px;

  border: 1px solid white;
`;

export const Animated = styled(MotiView)``;
