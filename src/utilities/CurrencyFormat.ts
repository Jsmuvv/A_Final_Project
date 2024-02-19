const CurrencyFormatter = new Intl.NumberFormat(undefined, {
    currency:"USD", style: "currency"
})



export function CurrencyFormat(number:number){
    return CurrencyFormatter.format(number)
}