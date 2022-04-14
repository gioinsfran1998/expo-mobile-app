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

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.palette.common.white};
  padding: 10px;
  border-radius: 5px;

  color: ${({ theme }) => theme.palette.secondary.dark};
`;

export const TextArea = styled.TextInput`
  background-color: ${({ theme }) => theme.palette.common.white};
  padding: 10px;
  border-radius: 5px;
  height: 100px;

  color: ${({ theme }) => theme.palette.secondary.dark};
`;

export const InputTitle = styled.Text`
  color: ${({ theme }) => theme.palette.common.white};
  font-family: ${({ theme }) => theme.typography.mediumItalic};
`;

export const GroupInput = styled.View`
  margin-bottom: 10px;
`;

export const Error = styled.Text`
  font-family: ${({ theme }) => theme.typography.bold};
  color: ${({ theme }) => theme.palette.error.light};
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.palette.common.white};
  font-family: ${({ theme }) => theme.typography.boldItalic};

  padding-top: 20px;
  padding-bottom: 20px;

  font-size: 20px;

  text-align: center;
`;
