import * as Yup from 'yup';

export const schema = Yup.object().shape({
  firstName: Yup.string().required('*First Name cannot be empty'),
  lastName: Yup.string().required('*Last Name cannot be empty'),
  location: Yup.string().required('*location cannot be empty'),
  task: Yup.string().required('*Task cannot be empty')
});
