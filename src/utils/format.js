const formatPrice = price => {
  var v = price;
  v = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumIntegerDigits: 1,
    minimumSignificantDigits: 1,
    minimumFractionDigits: 2
  }).format(v);
  var retorno = "";
  var arrayOfStrings = v.split(",");
  if (arrayOfStrings.length === 2) {
    if (arrayOfStrings[1].length === 1) {
      arrayOfStrings[1] = arrayOfStrings[1] + "0";
    }
    retorno = arrayOfStrings[0] + "," + arrayOfStrings[1];
  } else {
    retorno = v + ",00";
  }

  return retorno;
};
export default formatPrice;
