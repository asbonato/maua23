import React from 'react'
import Accordion from './Accordion'
import Busca from './Busca'

const itens = [
    {
        titulo: 'Java',
        conteudo: 'Linguagem compilada e interpretada.'
    },
    {
        titulo: 'Python',
        conteudo: 'Linguagem interpretada e dinamicamente tipada.'
    },
    {
        titulo: 'Javascript',
        conteudo: 'Executa do lado cliente e do servidor também.'
    }
]

const App = () => {
    const expressaoJSX = <Busca />
    return(
        <div>
            {expressaoJSX}
        </div>
    )
}

export default App