import { useState, useEffect } from 'react';

import apiStore from '../../services/api';
import { NavLink } from 'react-router-dom';

import './styles.scss';

export function CategoriesShowCase() {

    const [data, setData] = useState([]);

    useEffect(() => {
        apiStore.get("/produtos")
            .then(response => setData(response.data.data))
    }, []);

    const productsList = data;
    console.log(productsList);

    return (
        <div className="container-products-showcase">

            <div className="category-container">
                <div className="category-title-row">
                    <div className="category-title">Canecas</div>
                    <div><NavLink to="#" className="show-all">Ver Tudo</NavLink></div>
                </div>

                <div className="products-row">
                    {
                        productsList.map(product => {
                            if (product.id_category === 1) {
                                return (
                                    <div className="product-card">
                                        <div><img src={product.image} /></div>
                                        <div className="product-title">{product.name}</div>
                                        <div className="prize-tag"><div>{(product.prize).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</div></div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>

            <div className="category-container">
                <div className="category-title-row">
                    <div className="category-title">Almofadas</div>
                    <div><NavLink to="#" className="show-all">Ver Tudo</NavLink></div>
                </div>

                <div className="products-row">

                    {
                        productsList.map(product => {
                            if (product.id_category === 3) {
                                return (
                                    <div className="product-card">
                                        <div><img src={product.image} /></div>
                                        <div className="product-title">{product.name}</div>
                                        <div className="prize-tag"><div>{(product.prize).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</div></div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>

            <div className="category-container">
                <div className="category-title-row">
                    <div className="category-title">Azulejos</div>
                    <div><NavLink to="#" className="show-all">Ver Tudo</NavLink></div>
                </div>

                <div className="products-row">
                    {
                        productsList.map(product => {
                            if (product.id_category === 2) {
                                return (
                                    <div className="product-card">
                                        <div><img src={product.image} /></div>
                                        <div className="product-title">{product.name}</div>
                                        <div className="prize-tag"><div>{(product.prize).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</div></div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>

            <div className="category-container">
                <div className="category-title-row">
                    <div className="category-title">Máscaras</div>
                    <div><NavLink to="#" className="show-all">Ver Tudo</NavLink></div>
                </div>

                <div className="products-row">
                    {
                        productsList.map(product => {
                            if (product.id_category === 4) {
                                return (
                                    <div className="product-card">
                                        <div><img src={product.image} /></div>
                                        <div className="product-title">{product.name}</div>
                                        <div className="prize-tag"><div>{product.prize}</div></div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>

        </div>
    );

}