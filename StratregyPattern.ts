// Its deals with encapsulation modified algorithm in an interface and making them interchangable
/**
 * It has an inteface with specific propose and business case which interchange concrete implementation at the runtime so that we can change it behaviour
 * 
 * 
 * 
 */

/**
 * When to use StrategyPattern
 * 
 * If you have different variant of algorithm and you want to interchange at runtime
 * 
 * if you want ecanpsulate different behaviour in differnt classes but with the same interface
 * 
 * 
 */

interface BillingStrategy {
    calculate() : void
}

class concreteStrategyA implements BillingStrategy {
    calculate(): void {
        console.log('Calculating BillingStrategy A')
    }
}

class concreteStrategyB implements BillingStrategy {
    calculate(): void {
        console.log('Calculating BillingStrategy B')
    }
}

class BillingContext {
    constructor (private startegy: BillingStrategy) {}

    setStrategy (startegy:BillingStrategy) {
        this.startegy = startegy
    }

    calculateBill ():void {
        this.startegy.calculate();
    }
}