import styled from 'styled-components/native';

import { FontAwesome } from '@expo/vector-icons';

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0px 15px;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.palette.common.white};
`;

export const TouchableArrow = styled.TouchableOpacity`
  padding: 5px;
`;

export const ArrowRight = styled(FontAwesome).attrs(({ theme }) => {
  return {
    name: 'arrow-right',
    size: 24,
    color: theme.palette.common.black
  };
})``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.palette.common.black};
  font-family: ${({ theme }) => theme.typography.mediumItalic};
`;
