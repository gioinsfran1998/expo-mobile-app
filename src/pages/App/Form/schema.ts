import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string().required('O name não pode ser vazio')
});