import 'dart:io';
import 'dart:math';

enum OPCAO { pedra, papel, tesoura, sair }

void exibe(String texto) {
  print(texto);
}

int pegaOpcaoUsuario() {
  return int.parse(stdin.readLineSync()!);
}

bool opcaoEhValida(int opcao) {
  return opcao >= 1 && opcao <= 4;
}

OPCAO mapeiaOpcao(int opcao) {
  return OPCAO.values[opcao - 1];
}

String decideResultado(OPCAO opcaoUsuario, OPCAO opcaoComputador) {
  if (opcaoUsuario == opcaoComputador) return "Empate";
  if (opcaoUsuario == OPCAO.papel && opcaoComputador == OPCAO.pedra ||
      opcaoUsuario == OPCAO.pedra && opcaoComputador == OPCAO.tesoura ||
      opcaoUsuario == OPCAO.tesoura && opcaoComputador == OPCAO.papel) {
    return "Você venceu";
  } else {
    return "Computador venceu";
  }
}

void jogo() {
  int opUsuario;
  do {
    do {
      //exibir menu
      exibe('1-Pedra\n2-Papel\n3-Tesoura\n4-Sair');
      //capturar a ação do usuário, validando
      opUsuario = pegaOpcaoUsuario();
    } while (!opcaoEhValida(opUsuario));
    //se o usuário digitar 4, sair
    //senão
    if (opUsuario != 4) {
      //sortear escolha do computador
      int opComputador = Random().nextInt(3) + 1;
      //mapear opcao usuario, de int para enum
      OPCAO opcaoUsuario = mapeiaOpcao(opUsuario);
      //mapear opcao computador, de int para enum
      OPCAO opcaoComputador = mapeiaOpcao(opComputador);
      //exibir as opcoes de cada um
      exibe(
          'Você (${opcaoUsuario.name}) vs (${opcaoComputador.name}) Computador');
      //decidir quem venceu ou se houve empate
      String vencedor = decideResultado(opcaoUsuario, opcaoComputador);
      //exibir o resultado
      exibe(vencedor);
      exibe('*************************************');
      sleep(Duration(seconds: 3));
    }
  } while (opUsuario != 4);
  exibe('Até logo');
}
