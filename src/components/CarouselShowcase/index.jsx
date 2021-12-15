import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.scss';

export function CarouselShowcase() {

    const tartaruga = "https://marlimpo.org.br/wp-content/uploads/2017/05/tartaruga.jpg"

    return (
        <div className="container-carousel-showcase">

            <div className="carousel-title">PRODUTOS EM DESTAQUE</div>

            <Carousel>
                <Carousel.Item interval={999999} className="container-images">
                    <img
                        className="d-block w-20 mx-auto"
                        src={tartaruga}
                        alt="First slide"
                    />

                    <Carousel.Caption className="">
                        <div className="product-title">Nome do Produto</div>
                        <div className="prize-tag"><div>R$ 15,00</div></div>
                    </Carousel.Caption>

                </Carousel.Item>

                <Carousel.Item interval={999999} className="container-images">
                    <img
                        className="d-block w-20 mx-auto"
                        src={tartaruga}
                        alt="First slide"
                    />

                    <Carousel.Caption className="">
                        <div className="product-title">Nome do Produto</div>
                        <div className="prize-tag"><div>R$ 15,00</div></div>
                    </Carousel.Caption>

                </Carousel.Item>

                <Carousel.Item interval={999999} className="container-images">
                    <img
                        className="d-block w-20 mx-auto"
                        src={tartaruga}
                        alt="First slide"
                    />

                    <Carousel.Caption className="">
                        <div className="product-title">Nome do Produto</div>
                        <div className="prize-tag"><div>R$ 15,00</div></div>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item interval={999999} className="container-images">
                    <img
                        className="d-block w-20 mx-auto"
                        src={tartaruga}
                        alt="First slide"
                    />

                    <Carousel.Caption className="">
                        <div className="product-title">Nome do Produto</div>
                        <div className="prize-tag"><div>R$ 15,00</div></div>
                    </Carousel.Caption>

                </Carousel.Item>
            </Carousel>



        </div>
    );
}