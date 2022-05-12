export const verifyNumberIsPar = (x: number): boolean => {
  let verifiy;
  if (x % 2 === 0) {
    verifiy = true;
  } else {
    verifiy = false;
  }
  return verifiy;
};
