export default function buildMakeCategory() {

    return function makeCategory({
        id,
        name
    } ={}) {

        if (!name) {
            throw new Error('Category must have a name');
        }

        return Object.freeze({
            getId: () => id,
            getName: () => name
        })
    }
}