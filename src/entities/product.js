export default function buildMakeProduct() {

    return function makeProduct({
            id,
            name,
            description,
            price
        } = {}) {
        
        if (!name) {
            throw new Error('Product must have a name');
        }

        if (!price) {
            throw new Error('Product must have a price');
        }

        return Object.freeze({
            getId: () => id,
            getName: () => name,
            getDescription: () => description,
            getPrice: () => price
        });
    }
}