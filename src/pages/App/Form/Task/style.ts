import { FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  padding: 20px;

  background-color: ${({ theme }) => theme.palette.primary.main};

  min-height: 100%;
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
