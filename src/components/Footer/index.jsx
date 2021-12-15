import './styles.scss';
import Icon from '../../assets/instagram-icon.svg'

export function Footer() {

    return (
        <div className="container-footer">
            <h2>@tartaruguinhaarts</h2>
            <div>
                <img src={Icon} alt="icone instagram" />
            </div>
        </div>
    );
}