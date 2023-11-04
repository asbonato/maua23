export module Shipping {
    export interface Ship {
        name: string;
        tons: number;
    }

    export class NewShip implements Ship {
        name = "New Ship";
        tons = 500;
    }
}

export class Ship {
    name = "New Ship 2";
    tons = 500;
}