import React from 'react';
import { Text } from 'react-native';

import { Wrapper, Scrollable } from '../style';
import * as S from './style';

const Home = () => {
  return (
    <Wrapper>
      <Scrollable>
        <Text>Home</Text>
      </Scrollable>
    </Wrapper>
  );
};

export default Home;
