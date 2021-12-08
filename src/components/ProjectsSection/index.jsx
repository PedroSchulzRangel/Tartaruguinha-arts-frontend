import { Button } from '../Button'
import Img from '../../assets/card-img.png';
import './styles.scss';

export function ProjectsSection() {
    return (
        <div className="container-projects-section">
            <div className="card-text">
                <h3 className="card-titulo-historia">PROJETOS</h3>
                <p className="card-texto-historia">
                    Por que o nome Tartaruguinha?
                    Devem pensar que é por causa do projeto, mas não é. O nome Tartaruguinha Art’s nasceu do apelido da filha do nosso fundador e instrutor de mergulho Theo Costa. No processo de criar um nome para a loja, ele lembrou do apelido que deu quando a filha não tinha nem um ano de vida. E assim nasceu a Tartaruguinha Art’s!
                </p>
                <div className="button-saiba">
                    <Button text="SAIBA MAIS" link="#"/>
                </div>
            </div>
            <div className="card-img-historia">
                 <img src={Img} alt="imagem historia" />
            </div>
        </div>
    );
}