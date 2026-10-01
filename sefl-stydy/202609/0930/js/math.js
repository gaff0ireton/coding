export const tax = 1.1;

export function calcPrice(price) {
    const result = Math.floor(price * tax);
    return console.log(`税込価格: ${result}円`);

}

const applicationVersion = '2.0.0';

export { applicationVersion }