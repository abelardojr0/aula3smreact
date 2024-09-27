import "./style.css"

export const Card = ({element})=> {
    return(
        <div className="card">
            <h2>Nome: {element.nome}</h2>
            <p>Preço: {element.preco}</p>
        </div>
    )
}