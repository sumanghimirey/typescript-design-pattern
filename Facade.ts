// Facade is also a wrap one or more interfaces and hide complexity of complex inteface under simple interface.
// in simple term  you use a function to wrap many services calls together so that the client will call it with fewer parameters.

/**
 * When to use Facade 
 * 
 * To create Layer of abstraction
 * -- Client does not need to handle all the details or configuration parameters , so you create another layer of abstraction to deal with  that complexity
 * 
 */

interface ServiceA {
    actionA():void
}

interface ServiceB {
    actionB():void
}

export class ServiceAImpl implements ServiceA {
    actionA(): void {
        console.log('perfomming some Action A')
    }
}

export class ServiceBImpl implements ServiceB {

    actionB(): void {
        console.log('performing some action B')
    }
}

export class Facade {
    constructor (private serviceA:ServiceA, private serviceB:ServiceB) {
        this.serviceA = serviceA;
        this.serviceB = serviceB
    }

    perform(){
        this.serviceA.actionA()
        this.serviceB.actionB()

        //more complex log can implement here
    }
}

new Facade(new ServiceAImpl(), new ServiceBImpl).perform();