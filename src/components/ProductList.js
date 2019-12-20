import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Axios from 'axios';

const ProductList = ({ product, setRefresh }) => {
    const deleteProduct = id => {
        Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to recover the dish!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!"
		}).then(async result => {
			if (result.value) {
                try {
                    const url = `http://localhost:4000/restaurant/${id}`

                    const response = await Axios.delete(url);

                    if(response.status === 200) {
                        Swal.fire(
                            "Deleted!", 
                            "The dish has been deleted.", 
                            "success"
                        );
                        setRefresh(true);
                    }
                } catch (error) {
                    console.log(error);
                    Swal.fire(
                        'Error!',
                        'Error trying to delete dish',
                        'error'
                    )
                }
			}
		});
    }

    return (
        <li data-category={product.category} className="list-group-item d-flex justify-content-between align-items-center">
            <p>
                {product.name} {' '}
                <span className="font-weight-bold">
                    ${product.price}
                </span>
            </p>

            <div>
                <Link
                    to={`/products/edit/${product.id}`}
                    className="btn btn-success mr-2"
                >
                    Edit
                </Link>

                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteProduct(product.id)}
                >
                    Delete &times;    
                </button>
            </div>
        </li>
    );
}
 
export default ProductList;