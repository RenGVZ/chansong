const truncateWord = (str: string, length: number) => {
  const returnedStr = str
    .split('')
    .slice(0, length)
    .map((e, i) => (i < length ? e : '...'))
    .join('');
  return returnedStr;
};

export default truncateWord;
