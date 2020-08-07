export default (utcDate) => {
  const date = new Date(utcDate).toLocaleDateString('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const regexp = /\s(\d{4})\s[а-яё]\./i;
  const normalizedDate = date.replace(regexp, ', $1');

  return normalizedDate;
};
