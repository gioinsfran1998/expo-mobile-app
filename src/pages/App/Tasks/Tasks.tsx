import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../../components/shared/Button/Button';

import { Wrapper, Scrollable, Description, Title, Content } from '../style';
import * as S from './style';

const Tasks = ({ navigation }) => {
  return (
    <Wrapper>
      <Scrollable>
        <Title>Create Task</Title>
        <Description>Description create tas</Description>

        <Button
          mt={20}
          title='Create Task'
          onPress={() => navigation.navigate('CreateStack')}
        />
      </Scrollable>
    </Wrapper>
  );
};

export default Tasks;
