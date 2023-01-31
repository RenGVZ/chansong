const truncateWord = (str) => {
  const returnedStr = str
    .split('')
    .slice(0, 26)
    .map((e, i) => (i < 25 ? e : '...'))
    .join('');
  return returnedStr;
};

export default truncateWord;
