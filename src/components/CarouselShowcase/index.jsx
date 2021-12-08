import { Button } from '../../components/Button';
import './styles.scss';

export function CarouselShowcase() {
    return(
        <div className="container-products-showcase">
            <div className="container-destaque"> 
                <h4 className="text-destaque">PRODUTOS EM DESTAQUE</h4>
            </div>
            <div className="category-container">
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
                    <div className="product-card">
                        <div><img src="https://www.ecoloja.art.br/image/cache/catalog/Chaveiro/Chaveiro-Metal-Tartaruga-min-500x500.jpg" /></div>
                        <div className="product-title">Caneca Tartaruguinha Azul</div>
                        <div className="prize-tag"><div>R$ 15,00</div></div>
                    </div>
                </div>
            </div>
            <Button text="OUTROS PRODUTOS" link="/produtos"/>
        </div>
    );
}