import React from 'react';
import { View, Text, Button } from 'react-native';

import * as S from './style';

const Tasks = ({ navigation }) => {
  return (
    <S.Wrapper>
      <S.ButtonWrapper onPress={() => navigation.navigate('Form')}>
        <S.TextButton>Create Task</S.TextButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default Tasks;
