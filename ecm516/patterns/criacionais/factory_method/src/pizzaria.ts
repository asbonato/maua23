abstract class Pizza{
    abstract preparar(): void ;
    abstract assar(): void ;
    abstract cortar(): void ;
    abstract empacotar(): void;
}

class PizzaDeQueijo extends Pizza{
    preparar(): void {
        console.log('Preparando pizza de queijo...');
    }
    assar(): void {
        console.log('Assando a pizza de queijo...');
    }
    cortar(): void {
        console.log('Cortando a pizza de queijo...');
    }
    empacotar(): void {
        console.log('Empacotando a pizza de queijo...');
    }
}

class PizzaGrega extends Pizza{
    preparar(): void {
        console.log('Preparando pizza grega...');
    }
    assar(): void {
        console.log('Assando a pizza grega...');
    }
    cortar(): void {
        console.log('Cortando a pizza grega...');
    }
    empacotar(): void {
        console.log('Empacotando a pizza grega...');
    }
}

class PizzaDePepperoni extends Pizza{
    preparar(): void {
        console.log('Preparando pizza de pepperoni...');
    }
    assar(): void {
        console.log('Assando a pizza de pepperoni...');
    }
    cortar(): void {
        console.log('Cortando a pizza de pepperoni...');
    }
    empacotar(): void {
        console.log('Empacotando a pizza de pepperoni...');
    }
}

class PizzaDeMolusco extends Pizza{
    preparar(): void {
        console.log('Preparando pizza de molusco...');
    }
    assar(): void {
        console.log('Assando a pizza de molusco...');
    }
    cortar(): void {
        console.log('Cortando a pizza de molusco...');
    }
    empacotar(): void {
        console.log('Empacotando a pizza de molusco...');
    }
}

class PizzaVegetariana extends Pizza{
    preparar(): void {
        console.log('Preparando pizza vegetariana...');
    }
    assar(): void {
        console.log('Assando a pizza vegetariana...');
    }
    cortar(): void {
        console.log('Cortando a pizza vegetariana...');
    }
    empacotar(): void {
        console.log('Empacotando a pizza vegetariana...');
    }
}

class PizzaStore{
    constructor(private simplePizzaFactory: SimplePizzaFactory){

    }
    pedirPizza = (tipo: string): Pizza | null => {
        let pizza = this.simplePizzaFactory.criarPizza(tipo);
        //o operador ? chama o método somente se o objeto for
        //diferente de null
        pizza?.preparar();
        pizza?.assar();
        pizza?.cortar();
        pizza?.empacotar();
        return pizza;
    }
}

abstract class SimplePizzaFactory {
    abstract criarPizza(tipo: string): Pizza | null; 
}
