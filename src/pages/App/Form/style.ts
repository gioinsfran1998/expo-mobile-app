import { FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  padding: 20px;

  background-color: ${({ theme }) => theme.palette.primary.main};

  min-height: 100%;
`;

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.palette.common.white};
  padding: 10px;
  border-radius: 5px;

  color: ${({ theme }) => theme.palette.secondary.dark};
`;

export const Error = styled.Text`
  color: ${({ theme }) => theme.palette.common.white};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.palette.common.black};
  font-family: ${({ theme }) => theme.typography.mediumItalic};
`;

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
