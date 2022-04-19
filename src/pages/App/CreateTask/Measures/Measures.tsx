import { debounce, isEmpty } from 'lodash';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Text, Modal } from 'react-native';

import Button from '../../../../components/shared/Button/Button';
import Input from '../../../../components/shared/Input/Input';
import NavigationBar from '../../../../components/shared/NavigationBar/NavigationBar';

import * as S from './style';

const Measures = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    getValues,
    control,
    formState: { errors },
    handleSubmit,
    trigger
  } = useFormContext();

  const onSubmit = (data) => {
    console.log('Data:', data);
  };

  const onPress = debounce(() => {
    setLoading(false);
    if (!isEmpty(errors)) {
      return navigation.navigate('Errors');
    }
    handleSubmit(onSubmit);
  }, 3000);

  const saveFormToLeft = () => {
    navigation.goBack();
  };

  return (
    <S.Wrapper>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <S.Overlay>
          <S.ModalWrapper>
            <Input
              type='Number'
              placeholder='Height'
              name='height'
              label='Height:'
              control={control}
              error={errors.height?.message}
            />
            <Input
              type='Number'
              placeholder='Weight'
              name='weight'
              label='Weight:'
              control={control}
              error={errors.weight?.message}
            />

            <Button
              title='Close Modal'
              onPress={() => setModalVisible((prev) => !prev)}
            />
          </S.ModalWrapper>
        </S.Overlay>
      </Modal>
      <NavigationBar title='Go back to Gender' onPressLeft={saveFormToLeft} />
      <S.Description>Add your Measures</S.Description>

      <Button
        title='Open Modal'
        onPress={() => setModalVisible((prev) => !prev)}
      />

      <Button
        loading={loading}
        mt={20}
        title='Submit'
        onPress={() => {
          trigger(['height', 'weight']);
          setLoading(true);
          onPress();
        }}
      />

      <Text style={{ padding: 10, color: '#fafafa' }}>
        {JSON.stringify(getValues(), null, 2)}
      </Text>
    </S.Wrapper>
  );
};

export default Measures;
