import React, { useState } from 'react';
import { Controller, useForm, useFormContext } from 'react-hook-form';
import { Text } from 'react-native';
import NumberFormat from 'react-number-format';
import Button from '../../../../components/shared/Button/Button';
import NavigationBar from '../../../../components/shared/NavigationBar/NavigationBar';
import SelectColor from '../../../../components/shared/SelectColor/SelectColor';

import * as S from './style';

const dataColor = [
  {
    color: '#ff0000',
    value: 'red'
  },
  {
    color: '#00ff2f',
    value: 'green'
  },
  {
    color: '#0116ff',
    value: 'blue'
  },
  {
    color: '#ff9100',
    value: 'orange'
  },
  {
    color: '#979c43',
    value: 'beige'
  },
  {
    color: '#fa93c3',
    value: 'pink'
  },
  {
    color: '#7317e4',
    value: 'purple'
  }
];

const Extra = ({ navigation }) => {
  const [colorTask, setColorTask] = useState('red');

  const { getValues, setValue, control, trigger } = useFormContext();

  const handleSelect = (value) => {
    setColorTask(value);
    setValue('color', value);
  };

  const saveFormToRight = () => {
    navigation.navigate('Phone');
    trigger('color');
  };

  const saveFormToLeft = () => {
    navigation.goBack();
  };

  return (
    <S.Wrapper>
      <NavigationBar
        title='Go back to priority'
        onPressRight={saveFormToRight}
        onPressLeft={saveFormToLeft}
      />
      <S.Description>Select the desired color</S.Description>
      <Controller
        control={control}
        render={() => (
          <SelectColor
            data={dataColor}
            checked={colorTask}
            handleSelect={handleSelect}
          />
        )}
        name='color'
      />

      {getValues().color !== '' && (
        <S.Color color={getValues().color}>
          <S.ColorText>{getValues().color}</S.ColorText>
        </S.Color>
      )}

      <Text style={{ padding: 10, color: '#fafafa' }}>
        {JSON.stringify(getValues(), null, 2)}
      </Text>
    </S.Wrapper>
  );
};

export default Extra;
