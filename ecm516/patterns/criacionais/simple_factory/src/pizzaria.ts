class Pizza{
    preparar(): void {
        console.log('Preparando pizza...');
    }
    assar(): void {
        console.log('Assando a pizza...');
    }
    cortar(): void {
        console.log('Cortando a pizza...');
    }
    empacotar(): void {
        console.log('Empacotando a pizza...');
    }
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

class SimplePizzaFactory {
    criarPizza(tipo: string): Pizza | null {
        let pizza: Pizza | null = null;
        if (tipo == 'Queijo')
            pizza = new PizzaDeQueijo();
        //if (tipo == 'Grega')
        //    pizza = new PizzaGrega();
        if (tipo == 'Pepperoni')
            pizza = new PizzaDePepperoni();
        if (tipo == 'Molusco')
            pizza = new PizzaDeMolusco();
        if (tipo == 'Vegetariana')
            pizza = new PizzaVegetariana();
        return pizza;
    }
}

let pizzaStore: PizzaStore = new PizzaStore(new SimplePizzaFactory());
console.log(pizzaStore.pedirPizza('Molusco'));