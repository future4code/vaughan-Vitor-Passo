//Um passeio de 30 minutos para 1 cachorro custa R$25, sendo cada cachorro adicional R$15.
export const calculePrice = (quantify: number, duration: number): number => {
  //30min 25 + ((quantidade - 1) * 15)
  let price;
  if (duration === 30) {
    price = 25 + (quantify - 1) * 15;
  } else {
    price = 35 + (quantify - 1) * 20;
  }
  console.log(price);
  return price;
};
