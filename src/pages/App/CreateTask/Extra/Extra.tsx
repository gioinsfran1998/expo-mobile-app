import React, { useState } from 'react';
import { Controller, useForm, useFormContext } from 'react-hook-form';
import { Text } from 'react-native';
import Button from '../../../../components/shared/Button/Button';
import NavigationBar from '../../../../components/shared/NavigationBar/NavigationBar';
import SelectColor from '../../../../components/shared/SelectColor/SelectColor';

import * as S from './style';

const dataColor = [
  {
    color: '#fafafa',
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

  const { watch, getValues, setValue, control, trigger } = useFormContext();

  const handleSelect = (value) => {
    setColorTask(value);
    setValue('color', value);
  };

  const saveFormToRight = () => {
    trigger();
    navigation.navigate('Extra');
  };

  const saveFormToLeft = () => {
    trigger();
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

      <Text style={{ padding: 10, color: '#fafafa' }}>
        {JSON.stringify(getValues(), null, 2)}
      </Text>
      <Button title='Submit' mt={50} onPress={() => console.log('loog')} />
    </S.Wrapper>
  );
};

export default Extra;
