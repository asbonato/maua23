import 'dart:math';

bool validaJogo(List<int> jogo){
  //condições: 6 números inteiros positivos de 1 a 60 
  //sem repetição

  if(jogo.length != 6){
    return false;
  } else if(repetido(jogo)){
    return false;
  } else if(invalido(jogo)){
    return false;
  } else {
    return true;
  }
}

bool repetido(List<int> lista){
  for(int i = 0; i < lista.length; i++){
    for(int j = 0; j < lista.length; j++){
      if(lista[i]==lista[j] && i!=j){
        return true;
      }
    }
  }
  return false;
}

bool invalido(List<int> lista){
  for(final elemento in lista){
    if (elemento <=0 || elemento > 60){
      return true;
    }
  }
  return false;
}

List<int> converte(List<String> lista){
  List<int> retorno = [];
  for(final elemento in lista){
    retorno.add(int.parse(elemento));
  }
  return retorno;
}

List<int> geraJogo(){
  var gerador = Random();
  List<int> jogo = [];
  for(int i=0; i < 6; i++){
    int sorteio = gerador.nextInt(60) + 1;
    while(jogo.contains(sorteio)){
      sorteio = gerador.nextInt(60) + 1;
    }
    jogo.add(sorteio);
  }
  jogo.sort();
  return jogo;
}
