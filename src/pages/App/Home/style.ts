import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  padding: 20px;

  background-color: ${({ theme }) => theme.palette.primary.main};

  min-height: 100%;
`;

export const Input = styled.TextInput`
  border-radius: 5px;
  height: 50px;
  border: 1px solid #fafafa;
  font-size: 20px;
  padding: 0px 10px;

  color: #fafafa;
`;
