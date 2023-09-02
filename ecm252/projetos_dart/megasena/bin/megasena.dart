import 'package:megasena/megasena.dart';

void main(List<String> arguments) {
  List<int> jogo = converte(arguments);
  jogo.sort();

  if(validaJogo(jogo)){
    print('Jogo válido: $jogo');
    List<int> sorteio = geraJogo();
    print('Resultado do Sorteio: $sorteio');
    if (jogo == sorteio){
      print("Você é um novo milionário!");
    } else {
      print("Não foi desta vez. Tente novamente.");
    }
  } else {
    print('Jogo inválido: $jogo');
  }
  
}
