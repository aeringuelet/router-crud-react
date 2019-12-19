import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link to="/products" className="navbar-brand">
                React Routing and CRUD
            </Link>

            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink 
                        to="/products"
                        className="nav-link"
                        activeClassName="active"
                    >
                        Products
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink 
                        to="/add"
                        className="nav-link"
                        activeClassName="active"
                    >
                        New Product
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
);
 
export default Header;