import React, { useEffect } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { schema } from '../schema';
import { useTaskStore } from '../../../../store/useTaskStore';
import { Text } from 'react-native';

import NavigationBar from '../../../../components/shared/NavigationBar/NavigationBar';

import * as S from './style';

const Task = ({ navigation }) => {
  const [values, setValues] = useTaskStore((state) => [
    state.values,
    state.setValues
  ]);

  const {
    control,
    trigger,
    getValues,
    setValue: setValueForm,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur'
  });

  const saveForm = () => {
    const valuesForm = getValues();
    setValues(valuesForm);
    navigation.navigate('Priority');
  };

  return (
    <S.Wrapper>
      <NavigationBar
        title='Go to Priority'
        onPress={() => {
          trigger();
          saveForm();
        }}
      />
      <S.Description>Add Task</S.Description>
      <S.GroupInput>
        <S.InputTitle>Task:</S.InputTitle>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <S.TextArea
              placeholder='Ingress your task'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              multiline
            />
          )}
          name='task'
        />

        {errors.task && <S.Error>{errors.task?.message}</S.Error>}
      </S.GroupInput>
      <Text style={{ padding: 10, color: '#fafafa' }}>
        {JSON.stringify(values, null, 2)}
      </Text>
    </S.Wrapper>
  );
};

export default Task;
