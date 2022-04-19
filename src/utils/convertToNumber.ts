export const convertToNumber = (value: any): number => {
  let format = value;
  format = format.replace(/\D+/g, '');
  format = parseInt(format);
  return format;
};
