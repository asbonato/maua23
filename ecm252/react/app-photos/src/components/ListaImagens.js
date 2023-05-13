import React from "react"
import Imagem from "./Imagens"

const ListaImagens = ({pics}) => {
    return (
        pics.map((pic, key) => (
            <Imagem
                pic={pic.src.small}
                key={key}
            />
        ))
    )
}

export default ListaImagens