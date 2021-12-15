import './styles.scss';
import Icone from '../../assets/instagram-icon.svg'

export function Footer() {

    return (
        <div className="container-footer">
            <h2>@tartaruguinhaarts</h2>
            <div>
                <img src={Icone} alt="icone instagram" />
            </div>
        </div>
    );
}