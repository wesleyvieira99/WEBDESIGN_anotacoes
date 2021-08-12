import React, {Component} from 'react'

//Uma classe que extende para um Componente
export default class Saudacao extends Component {
    //State com minhas propriedades
    
    constructor(props) {
        super(props)
        this.state = {
            tipo: this.props.tipo,
            nome: this.props.nome
        }
    }
    
    //Função que nos permite alterar o input
    setTipo(e) {
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        //dois parametros: tipo (bomdia), nome (Ana)
    const {tipo, nome} = this.state
    return (
        <div>
            <h1>{tipo} {nome}!</h1>
            <hr />
            <input type="text" placeholder="Tipo" value={tipo} onChange={e => this.setTipo(e)} />
            <input type="text" placeholder="Nome" value={nome} onChange={e => this.setNome(e)}/>
        </div>
    )
    }
}