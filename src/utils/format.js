const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', { 
        style: 'currency', 
        currency: 'BRL',
        minimumIntegerDigits:2,
        maximumFractionDigits:4,
        minimumFractionDigits: 2,
        minimumSignificantDigits:1,
        maximumSignificantDigits: 4,
    }).format(price)
    
     
}
export default formatPrice;