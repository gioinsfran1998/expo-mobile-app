import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Button from '../../../../components/shared/Button/Button';
import * as S from './style';
import { schema } from '../schema';
import { Picker } from '@react-native-picker/picker';
import { Alert, Modal, View } from 'react-native';

const Priority = ({ navigation }) => {
  const [value, setValues] = useState({});
  const [importance, setImportance] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const {
    control,
    trigger,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur'
  });

  const handleSubmit = (data) => {
    console.log('Task', data);
  };

  return (
    <S.Wrapper>
      <S.Description>Enter task priority</S.Description>

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
        style={{ position: 'relative' }}
      >
        <S.Overlay>
          <S.ModalWrapper>
            <Controller
              control={control}
              render={() => (
                <Picker
                  itemStyle={{
                    color: '#fafafa'
                  }}
                  selectedValue={importance}
                  onValueChange={(itemValue) => {
                    setValue('importance', itemValue);
                    setImportance(itemValue);
                    setModalVisible((prev) => !prev);
                  }}
                >
                  <Picker.Item label='Hight' value='hight' />
                  <Picker.Item label='Low' value='low' />
                  <Picker.Item label='Regular' value='regular' />
                </Picker>
              )}
              name='priority'
            />
          </S.ModalWrapper>
        </S.Overlay>
      </Modal>

      <Button title='Select' onPress={() => setModalVisible((prev) => !prev)} />
      <Button title='Submit' mt={50} onPress={handleSubmit} />
    </S.Wrapper>
  );
};

export default Priority;
