import React, { useState } from "react";
import Error from "./Error";
import Axios from "axios";
import { withRouter } from 'react-router-dom'; 
import Swal from 'sweetalert2';

const AddProduct = ({ history, setRefresh }) => {
    const [ name, setName ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ category, setCategory ] = useState('');
    const [ error, setError ] = useState(false);

    const addDish = async e => {
        e.preventDefault();

        if(name === '' || price === '' || category === '') {
            setError(true);
            return;
        }

        let url = `http://localhost:4000/restaurant`;
        setError(false);

        try {
            const response = await Axios.post(url, {
                name,
                price,
                category
            })

            if(response.status === 201) {
                Swal.fire(
                    'Dish created!',
                    'The dish was created succesfully',
                    'success'
                );
            }
        } catch (error) {
            console.log(error);
            Swal.fire(
                'Error!',
                'Error trying to create dish',
                'error'
            )
        }

        setRefresh(true);
        history.push('/products');
    }

	return (
		<div className="col-md-8 mx-auto">
			<h1 className="text-center">Add new dish</h1>

            { (error) ? <Error message="All fields are mandatory" /> : null }

            <form
                onSubmit={addDish} 
                className="mt-5"
            >
				<div className="form-group">
					<label>Dish Name</label>
					<input
						type="text"
						className="form-control"
						name="name"
                        placeholder="Name"
                        onChange={e =>setName(e.target.value)}
					/>
				</div>

				<div className="form-group">
					<label>Dish Price</label>
					<input
						type="number"
						className="form-control"
						name="price"
                        placeholder="Price"
                        onChange={e => setPrice(e.target.value)}
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
                            onChange={e => setCategory(e.target.value)}
						/>
						<label className="form-check-label">Salad</label>
					</div>
				</div>

				<input
					type="submit"
					className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3"
					value="Add Dish"
				/>
			</form>
		</div>
	);
};

export default withRouter(AddProduct);
