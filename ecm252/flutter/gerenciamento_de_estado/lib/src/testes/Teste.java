package testes;
public class Teste {
    public static void main(String[] args){
        Pessoa pessoa = new Pessoa("João", 25);
        System.out.println(pessoa.getNome());
        System.out.println(pessoa.getIdade());
        pessoa.setNome("Maria");
        pessoa.setIdade(21);
        System.out.println(pessoa.getNome());
        System.out.println(pessoa.getIdade());

        //não pode atribuir direto pois viola o encapsulamento
        //pessoa.nome = "Maria";
        //pessoa.idade = 21;
    }
}
