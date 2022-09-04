import { products } from "./contance/data.js";
import Product from "./model/product-scema.js";

const DefaultData = async() => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);

        console.log('Data imported Successfully')
    } catch (error) {
        console.log('Error while inserting defualt data ',error.message);
    }
}

export default DefaultData