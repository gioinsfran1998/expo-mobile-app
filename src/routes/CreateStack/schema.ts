import * as Yup from 'yup';

export const schema = Yup.object().shape({
  firstName: Yup.string().required('*First Name cannot be empty'),
  lastName: Yup.string().required('*Last Name cannot be empty'),
  task: Yup.string().required('*Task cannot be empty'),
  phoneNumber: Yup.string().required('*Phone number cannot be empty'),
  documentNumber: Yup.string().required('*Document Number cannot be empty'),
  country: Yup.string().required('*Country cannot be empty'),
  city: Yup.string().required('*City cannot be empty'),
  address: Yup.string().required('*Address cannot be empty'),
  twitter: Yup.string().required('*Twitter cannot be empty'),
  instagram: Yup.string().required('*Instagram cannot be empty'),
  facebook: Yup.string().required('*Instagram cannot be empty'),
  gender: Yup.string().required('*Gender cannot be empty'),
  height: Yup.string().required('*Height cannot be empty'),
  weight: Yup.string().required('*Weight cannot be empty')
});
