import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { schema } from './schema';
import { Text } from 'react-native';
import { useTaskStore } from '../../../store/useTaskStore';

import NavigationBar from '../../../components/shared/NavigationBar/NavigationBar';
import Input from '../../../components/shared/Input/Input';

import * as S from './style';

const Form = ({ navigation }) => {
  const [values, setValues] = useTaskStore((state) => [
    state.values,
    state.setValues
  ]);

  const {
    control,
    trigger,
    getValues,
    formState: { errors }
  } = useForm({
    defaultValues: values,
    resolver: yupResolver(schema),
    mode: 'onBlur'
  });

  const saveForm = () => {
    const valuesForm = getValues();
    console.log('valuesForm', valuesForm);
    setValues(valuesForm);
    navigation.navigate('Task');
  };

  return (
    <S.Wrapper>
      <NavigationBar
        title='Go to Task'
        onPress={() => {
          trigger();
          saveForm();
        }}
      />
      <S.Description>Enter user data</S.Description>
      <Input
        placeholder='Ingress First Name'
        name='firstName'
        label='First Name:'
        control={control}
        error={errors.firstName?.message}
      />

      <S.GroupInput>
        <S.InputTitle>Last Name:</S.InputTitle>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <S.Input
              placeholder='Ingress Last Name'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name='lastName'
        />
        {errors.lastName && <S.Error>{errors.lastName?.message}</S.Error>}
      </S.GroupInput>

      <S.GroupInput>
        <S.InputTitle>Location:</S.InputTitle>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <S.Input
              placeholder='Ingress location'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name='location'
        />
        {errors.location && <S.Error>{errors.location?.message}</S.Error>}
      </S.GroupInput>

      <Text style={{ padding: 10, color: '#fafafa' }}>
        {JSON.stringify(values, null, 2)}
      </Text>
    </S.Wrapper>
  );
};

export default Form;
