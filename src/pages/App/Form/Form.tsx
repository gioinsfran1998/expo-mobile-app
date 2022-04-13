import React, { useEffect } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { schema } from './schema';

import * as S from './style';
import Button from '../../../components/shared/Button/Button';
import { Text } from 'react-native';
import { useTaskStore } from '../../../store/useTaskStore';

const Form = ({ navigation }) => {
  const [values, setValues] = useTaskStore((state) => [
    state.values,
    state.setValues
  ]);
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    setValues('name', data.name);
    setValues('mierda', 'Marciely');
  };
  console.log('Submit', values);

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Go To Task</S.Title>
        <S.TouchableArrow onPress={() => navigation.navigate('Task')}>
          <S.ArrowRight />
        </S.TouchableArrow>
      </S.Header>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <S.Input
            placeholder='Ingress name'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name='name'
      />
      {errors.name && <S.Error>{errors.name?.message}</S.Error>}
      <Button mt={10} title='Submit' onPress={handleSubmit(onSubmit)} />
    </S.Wrapper>
  );
};

export default Form;
