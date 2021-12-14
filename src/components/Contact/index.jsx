import {Button} from '../Button'

import './styles.scss';


export function Contact() {

    return (
        <div className="container-contact">
            <div className="contact-title">Contato</div>
            <div>
                <div>Celular: (11) 9591-94796</div>
                <div>E-mail: tartaruguinhaarts@yahoo.com</div>
                <div className="container-instagram">
                    <div>
                        <i class="fab fa-instagram fa-2x"></i>
                    </div>
                    <div>@tartaruguinhaarts</div>
                </div>
            </div>
            <div><Button text="FORMULÁRIO DE CONTATO" link="/formulario"/></div>
        </div>
    );
}