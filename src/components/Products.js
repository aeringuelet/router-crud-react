import React, { Fragment } from 'react';
import ProductList from './ProductList';

const Products = ({ products }) => {
    return (
        <Fragment>
            <h1 className="text-center">
                Products
            </h1>
            <ul className="list-group mt-5">
                {products.map(prod => (
                    <ProductList key={prod.id} product={prod} />
                ))}
            </ul>
        </Fragment>
    );
}
 
export default Products;