import { useState, useEffect } from 'react';
import apiStore from '../../services/api';



import './styles.scss';


export function ProductsShowCase() {

    

    const [productsByCategory, setProductsByCategory] = useState(
        {
            canecas: []
        },
        {
            canecas: []
        },
        {
            canecas: []
        },
        {
            canecas: []
        },
    );

    useEffect(() => {
    
        apiStore.get("produtos").then(res => {
            console.log("Dados recebidos!");
            console.log(res);
        })
        
    }, [])

    return (
        <div className="container-products-showcase">
            {/* <div className="category-container">
                <div className="category-title">CANECAS</div>
                <div className="products-row">
                    <div className="product-card">
                        <div><img src="https://www.ecoloja.art.br/image/cache/catalog/Chaveiro/Chaveiro-Metal-Tartaruga-min-500x500.jpg" /></div>
                        <div className="product-title">Caneca Tartaruguinha Azul</div>
                        <div className="prize-tag"><div>R$ 15,00</div></div>
                    </div>
                    <div className="product-card">
                        <div><img src="https://www.ecoloja.art.br/image/cache/catalog/Chaveiro/Chaveiro-Metal-Tartaruga-min-500x500.jpg" /></div>
                        <div className="product-title">Caneca Tartaruguinha Azul</div>
                        <div className="prize-tag"><div>R$ 15,00</div></div>
                    </div>
                    <div className="product-card">
                        <div><img src="https://www.ecoloja.art.br/image/cache/catalog/Chaveiro/Chaveiro-Metal-Tartaruga-min-500x500.jpg" /></div>
                        <div className="product-title">Caneca Tartaruguinha Azul</div>
                        <div className="prize-tag"><div>R$ 15,00</div></div>
                    </div>
                    <div className="product-card">
                        <div><img src="https://www.ecoloja.art.br/image/cache/catalog/Chaveiro/Chaveiro-Metal-Tartaruga-min-500x500.jpg" /></div>
                        <div className="product-title">Caneca Tartaruguinha Azul</div>
                        <div className="prize-tag"><div>R$ 15,00</div></div>
                    </div>
                    <div className="product-card">
                        <div><img src="https://www.ecoloja.art.br/image/cache/catalog/Chaveiro/Chaveiro-Metal-Tartaruga-min-500x500.jpg" /></div>
                        <div className="product-title">Caneca Tartaruguinha Azul</div>
                        <div className="prize-tag"><div>R$ 15,00</div></div>
                    </div>

                </div>

            </div> */}



        </div>
    );

}