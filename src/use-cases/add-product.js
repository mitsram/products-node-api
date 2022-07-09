import makeProduct from '../entities';

export default function makeAddProduct() {

    return async function addProduct(productInfo) {

        const product = makeProduct(productInfo);
    }
}