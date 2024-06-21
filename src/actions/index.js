"use server"

export const fetchProduct = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        return data.products;
    } catch (err) {
        console.log(err)
        throw new Error(err);
    }
}