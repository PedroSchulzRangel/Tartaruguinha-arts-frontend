import { Button } from "../Button";
import './style.scss';
import { Link } from 'react-router-dom'

export function ProductCategory() {
    return(
        <div className="container-products-showcase">
            <div className="container-destaque"> 
                    <h4 className="text-destaque">NOME DO PRODUTO</h4>
            </div>
            <div className="category-container">
                <div className="products-row">
                    <div className="product-card">
                        <div><img src="https://www.ecoloja.art.br/image/cache/catalog/Chaveiro/Chaveiro-Metal-Tartaruga-min-500x500.jpg" /></div>
                        <div className="product-title">Caneca Tartaruguinha Azul</div>
                        <div className="prize-tag"><div>R$ 15,00</div></div>
                        <Link to="https://www.instagram.com/tartaruguinhaarts/">Comprar</Link>
                    </div>
                    <div className="product-card">
                        <div><img src="https://www.ecoloja.art.br/image/cache/catalog/Chaveiro/Chaveiro-Metal-Tartaruga-min-500x500.jpg" /></div>
                        <div className="product-title">Caneca Tartaruguinha Azul</div>
                        <div className="prize-tag"><div>R$ 15,00</div></div>
                        <Button text="COMPRAR" link="/comprar"/>
                    </div>
                    <div className="product-card">
                        <div><img src="https://www.ecoloja.art.br/image/cache/catalog/Chaveiro/Chaveiro-Metal-Tartaruga-min-500x500.jpg" /></div>
                        <div className="product-title">Caneca Tartaruguinha Azul</div>
                        <div className="prize-tag"><div>R$ 15,00</div></div>
                        <Button text="COMPRAR" link="/comprar"/>
                    </div>
                    <div className="product-card">
                        <div><img src="https://www.ecoloja.art.br/image/cache/catalog/Chaveiro/Chaveiro-Metal-Tartaruga-min-500x500.jpg" /></div>
                        <div className="product-title">Caneca Tartaruguinha Azul</div>
                        <div className="prize-tag"><div>R$ 15,00</div></div>
                        <Button text="COMPRAR" link="/comprar"/>
                    </div>
                    <div className="product-card">
                        <div><img src="https://www.ecoloja.art.br/image/cache/catalog/Chaveiro/Chaveiro-Metal-Tartaruga-min-500x500.jpg" /></div>
                        <div className="product-title">Caneca Tartaruguinha Azul</div>
                        <div className="prize-tag"><div>R$ 15,00</div></div>
                        <Button text="COMPRAR" link="/comprar"/>
                    </div>
                </div>
            </div>
            <div className="especificacoes">
                <div>
                    <h2>ESPECIFICAÇÕES DO PRODUTO</h2>
                </div>
                <div>
                    <p>Caneca de Cerâmica
                        <br/>
                        <br/>
                        Caneca em cerâmica branca, estampada em alta definição.
                        <br/>
                        <br/>
                        *Não sai na água, não desbota
                        <br/>
                        <br/>
                        *Resistente a microondas
                        <br/>
                        <br/>
                        Cuidados com o produto: Lavar com sabão neutro e esponja macia.
                        <br/>
                        <br/>
                        Não usar produtos abrasivos na limpeza. 
                        <br/>
                        <br/>
                        Pode ser levado ao micro-ondas e à lava-louças. 
                        <br/>
                        <br/>
                        Altura: 9,5 cm
                        <br/>
                        <br/>
                        Diâmetro: 8 cm
                        <br/>
                        <br/>
                        Capacidade: 325 ml
                    </p>
                </div>
            </div>
        </div>
    );
}