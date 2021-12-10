import { useState } from 'react'
import { Modal } from '../ModalProject/Modal'
import Img from '../../assets/card-img.png';
import './styles.scss';

export function ProjectsSection() {
    const [openModal, setOpenModal ] = useState(false)

    return (
        <div className="container-projects-section">
            <div className="card-text">
                <div>
                <h3 className="card-titulo-historia one">PROJETOS</h3>
                </div>
                <div className="card-responsivo"> 
                    <p className="card-texto-historia">
                        Por que o nome Tartaruguinha?
                        Devem pensar que é por causa do projeto, mas não é. O nome Tartaruguinha Art’s nasceu do apelido da filha do nosso fundador e instrutor de mergulho Theo Costa. No processo de criar um nome para a loja, ele lembrou do apelido que deu quando a filha não tinha nem um ano de vida. E assim nasceu a Tartaruguinha Art’s!
                    </p>
                    <div>
                        <button className="button-saiba" onClick={() => setOpenModal(true)}>SAIBA MAIS</button>
                    </div>
                </div>
            </div>
            <div className="card-img-historia two">
                 <img src={Img} alt="imagem historia" />
            </div>
            {openModal && <Modal fechar={() => setOpenModal(false)}/>}
        </div>
    );
}