export const thousandsSeparator = (value: any) => {
  let format = value;
  format = format.replace(/\D+/g, '');

  if (format === '' && value.length > 0) return '';

  const pattern = /(\d)(?=(\d{3})+(?!\d))/g;
  const replace = '$1.';
  format = format.replace(pattern, replace);

  return format;
};
