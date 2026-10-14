export function addTax(price, taxRate = 0.1) {
  return Math.round(price * (1 + taxRate));
}
