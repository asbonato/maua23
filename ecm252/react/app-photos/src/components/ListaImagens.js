import React from "react"
import Imagem from "./Imagens"

const ListaImagens = ({pics, imgStyle}) => {
    return (
        pics.map((pic, key) => (
            <Imagem
                imgStyle={imgStyle}
                pic={pic.src.small}
                key={key}
            />
        ))
    )
}

export default ListaImagens