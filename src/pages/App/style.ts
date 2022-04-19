import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.palette.background.default};

  min-height: 100%;
`;

export const Scrollable = styled.ScrollView`
  padding: 20px;
  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.typography.mediumItalic};

  font-size: 20px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.typography.lightItalic};

  font-size: 14px;
`;

export const Content = styled.View``;
