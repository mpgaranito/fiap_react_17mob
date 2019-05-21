const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', { 
        style: 'currency', 
        currency: 'BRL',
        maximumSignificantDigits: 2
    }).format(price)
    
     
}
export default formatPrice;