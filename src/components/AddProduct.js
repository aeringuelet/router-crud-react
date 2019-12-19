import React, { useState } from "react";

const AddProduct = () => {
    const [ name, setName ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ category, setCategory ] = useState('');

    const setRadioValue = e => {
        setCategory(e.target.value);
    }

	return (
		<div className="col-md-8 mx-auto">
			<h1 className="text-center">Add new dish</h1>
			<form className="mt-5">
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

export default AddProduct;
