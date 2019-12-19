import React, { useState, useRef } from 'react';
import Error from './Error';
import Swal from 'sweetalert2';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

const EditProduct = (props) => {
	const { product, history, setRefresh } = props;
	
    const nameRef = useRef('');
    const priceRef = useRef('');

    const [ error, setError ] = useState(false);
    const [ category, setCategory ] = useState('');

    const editDish = async e => {
        e.preventDefault();

        let newCategory = (category === '') ? product.category : category;

        const editedDish = {
            name: nameRef.current.value,
            price: priceRef.current.value,
            category: newCategory
        }

        const url = `http://localhost:4000/restaurant/${product.id}`;

        try {
			const response = await Axios.put(url, editedDish);
			
			if(response.status === 200) {
				Swal.fire(
					'Dish updated!',
					'The dish was updated succesfully',
					'success'
				);
			}
        } catch (error) {
            console.log(error);
            Swal.fire(
                'Error!',
                'Error trying to update dish',
                'error'
            )
		}
		
		setRefresh(true);
		history.push('/products')
    }
    return (
        <div className="col-md-8 mx-auto">
			<h1 className="text-center">Edit dish</h1>

            { (error) ? <Error message="All fields are mandatory" /> : null }

            <form
                onSubmit={editDish} 
                className="mt-5"
            >
				<div className="form-group">
					<label>Dish Name</label>
					<input
						type="text"
						className="form-control"
						name="name"
                        placeholder="Name"
                        ref={nameRef}
                        defaultValue={product.name}
					/>
				</div>

				<div className="form-group">
					<label>Dish Price</label>
					<input
						type="number"
						className="form-control"
						name="price"
                        placeholder="Price"
                        ref={priceRef}
                        defaultValue={product.price}
					/>
				</div>

				<legend className="text-center">Category:</legend>
				<div className="text-center">
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="category"
                            value="dessert"
                            defaultChecked={product.category === "dessert"}
                            onChange={e => setCategory(e.target.value)}
						/>
						<label className="form-check-label">Dessert</label>
					</div>
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="category"
                            value="drink"
                            defaultChecked={product.category === "drink"}
                            onChange={e => setCategory(e.target.value)}
						/>
						<label className="form-check-label">Drink</label>
					</div>

					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="category"
                            value="meat"
                            defaultChecked={product.category === "meat"}
                            onChange={e => setCategory(e.target.value)}
						/>
						<label className="form-check-label">Meat</label>
					</div>

					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="category"
                            value="salad"
                            defaultChecked={product.category === "salad"}
                            onChange={e => setCategory(e.target.value)}
						/>
						<label className="form-check-label">Salad</label>
					</div>
				</div>

				<input
					type="submit"
					className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3"
					value="Edit Dish"
				/>
			</form>
		</div>
    );
}
 
export default withRouter(EditProduct);