class Singleton {
    private static instance: Singleton;
    private contador: number;

    private constructor() {
        this.contador = 0;
    }
    
    public static getInstance(): Singleton {
        if(!Singleton.instance)
            Singleton.instance = new Singleton()

        return Singleton.instance;
    }

    public executar(): void {
        console.log("Executando alguma coisa...");
    }

    public incrementar(): number {
        this.contador ++;
        return this.contador;
    }
}

export default Singleton;