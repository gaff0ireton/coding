export function addTax(price, taxRate = .1) {
    return Math.round(price * (1 + taxRate));
}
