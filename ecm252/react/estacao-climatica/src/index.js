import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { EstacaoClimatica } from "./EstacaoClimatica";
import Loading from "./Loading";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("construtor");
  }

  //inicializando o estado sem usar o construtor
  state = {
    latitude: null,
    longitude: null,
    estacao: null,
    data: null,
    icone: null,
    mensagemDeErro: null,
  };

  componentDidMount() {
    this.obterLocalizacao();
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillMount");
  }

  obterEstacao = (data, latitude) => {
    const anoAtual = data.getFullYear();
    //new Data(ano, mês(0 a 11), dia(1 a 31))
    //21/Jun
    const d1 = new Date(anoAtual, 5, 21);
    //24/Set
    const d2 = new Date(anoAtual, 8, 24);
    //22/Dez
    const d3 = new Date(anoAtual, 11, 22);
    //21/Mar
    const d4 = new Date(anoAtual + 1, 2, 21);

    const sul = latitude < 0;

    if (data >= d1 && data < d2) return sul ? "Inverno" : "Verão";
    if (data >= d2 && data < d3) return sul ? "Primavera" : "Outono";
    if (data >= d3 && data < d4) return sul ? "Verão" : "Inverno";
    return sul ? "Outono" : "Primavera";
  };

  icones = {
    Primavera: "fa-seedling",
    Verão: "fa-umbrella-beach",
    Outono: "fa-tree",
    Inverno: "fa-snowman",
  };

  obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition(
      (posicao) => {
        let data = new Date();
        let estacao = this.obterEstacao(data, posicao.coords.latitude);
        let icone = this.icones[estacao];
        //console.log(icone)
        this.setState({
          latitude: posicao.coords.latitude,
          longitude: posicao.coords.longitude,
          estacao: estacao,
          data: data.toLocaleString(),
          icone: icone,
        });
      },
      (erro) => {
        console.log(erro);
        this.setState({ mensagemDeErro: "Tente novamente mais tarde" });
      }
    );
  };

  render() {
    console.log("render");
    return (
      //responsividade, margem acima
      <div className="container mt-2">
        {/** uma linha, conteúdo centralizado, display é flex */}
        <div className="row justify-content-center">
          {/** oito colunas das doze disponíveis serão usadas para telas
                         médias em diante */}
          <div className="col-md-8">
          {
            (!this.state.latitude && !this.state.mensagemDeErro)?
               <Loading mensagem = 'Por favor, responda à solicitação de localização.'/>
            :
                this.state.mensagemDeErro?
                <p className="border rounded p-2 fs-1 text-center">
                    É preciso dar permissão para acesso à localização.
                    Atualize a página e tente de novo, ajustando a 
                    configuração no seu navegador.
                </p>
                :
                    <EstacaoClimatica
                    icone={this.state.icone}
                    estacao={this.state.estacao}
                    latitude={this.state.latitude}
                    longitude={this.state.longitude}
                    obterLocalizacao={this.obterLocalizacao}
                    />
          }
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
