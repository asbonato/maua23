import React from 'react'
import Accordion from './Accordion'

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
    return(
        <div>
            <Accordion itens={itens}/>
        </div>
    )
}

export default App