import React, { FC } from 'react';

import * as S from './style';

interface NavigationBarProps {
  title: String;
  onPress: () => void;
}
const NavigationBar: FC<NavigationBarProps> = ({
  title = 'Title',
  onPress
}) => {
  return (
    <S.Header>
      <S.Title>{title}</S.Title>
      <S.TouchableArrow onPress={onPress}>
        <S.ArrowRight />
      </S.TouchableArrow>
    </S.Header>
  );
};

export default NavigationBar;
