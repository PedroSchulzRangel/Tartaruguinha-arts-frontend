import './style.scss'

export const Modal = (props) => {
    return(
        <div className="container-modal">
            <div className="conteudo-modal">
                <h2>Projetos</h2>
                <p>Lorem Ipsum</p>
                <button onClick={props.fechar}>X</button>
            </div>
        </div>
    )
}