import makeAddProduct from './add-product';

const productService = Object.freeze({
    addProduct,
    editProduct,
    listProducts,
    removeProduct
});

export default productService;
export { addProduct, editProduct, listProducts, removeProduct }