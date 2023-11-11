import 'package:flutter/material.dart';
import 'package:gerenciamento_de_estado/src/telas/login_tela.dart';
import 'blocs/provider.dart';

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    //empacotar o MaterialApp com um Provider
    return Provider(
      child: MaterialApp(
      title: 'Login',
      home: Scaffold(
        body: LoginTela(),
      )
    )
    );
  }
}