import { useSelectProduct } from '../../hooks/useSelectProduct';

import { useState, useEffect } from 'react';

import apiStore from '../../services/api';

import Icon from '../../assets/instagram-icon.svg'
import WhatsIcon from '../../assets/whatsapp-icon.svg'

import './styles.scss';


export function BuyProduct() {

    // const { selectedProduct } = useSelectProduct();

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     apiStore.get(`/produtos/${selectedProduct}`)
    //         .then(response => setData(response.data.data))
    // }, []);

    // const product = data;
    // console.log(selectedProduct)

    return (
        <div className="container-buy">

            <div className="buy-title">ENTRAR EM CONTATO COM VENDEDOR</div>

            <div className="info">
                <div className="container-icons">

                    <div className="whatsapp-icon">
                        <img src={WhatsIcon} alt="icone whatsapp" />
                    </div>
                    <div>(11) 9591-94796</div>

                </div>

                <div className="info">
                    <div className="container-icons">
                        <div className="instagram-icon">
                            <img src={Icon} alt="icone instagram" />
                        </div>
                        <div>@tartaruguinhaarts</div>
                    </div>

                </div>
            </div>

        </div>
    );
}