/**
 * Observer is a behavioral design pattern that established subscription model of communicatoin
 * For example : if we want to send a user notification after user has registered  or some part applicaton need to get update 
 * from second part of the application
 * 
 * When to use Observer Pattern
 * 
 * To create one to many communication between objects 
 * Trigger event to different part of an application withou coupling dependencies
 * 
 */


 interface Subscriber {
    notify(): void;
    }
    export abstract class Subject {
    private subscribers: Subscriber[] = [];
    public addSubscriber(s: Subscriber): void {
    this.subscribers.push(s);
    }
    public removeSubscriber(s: Subscriber): void {
    var n: number = this.subscribers.indexOf(s);
    this.subscribers.splice(n, 1);
    }
    public notify(): void {
    console.log("notifying all the subscribers one  by one");
    for (let s of this.subscribers) {
    s.notify();
    }
    }
    }


    //Subscriber accepts only one method, called notify(). The responsibility of calling this
    //method lies with Subject. The notify() method iterates over the subscribers list and
    //calls the interface method on each of them. Let's see what will happen during that call:




 export class ConcreteSubject extends Subject {
    private state: any;
    getState(): any {
    return this.state;
    }
    setState(state: any) {
    this.state = state;
    }
    }

    export class ConcreteSubscriber implements Subscriber {
        private state: any;
        constructor(private subject: ConcreteSubject) {}
        public notify(): void {
        this.state = this.subject.getState();
        console.log("ConcreteSubscriber: Received notify method from subject state", this.state);
        }
        getSubject(): ConcreteSubject {
        return this.subject;
        }
        setSubject(subject: ConcreteSubject) {
        this.subject = subject;
        }
        }
     
     

    //ConcreteSubscriber receives a message from the Subject class through
    //notify() and retrieves the current subject state via the this.subject.getState()
    //call. Alternatively, you can also perform the same operation by passing the state as a parameter in notify:
   
   // This is a more direct approach of passing the right message or state to subscribers. The
   // following is how the clients will use this pattern:
    const subject = new ConcreteSubject();
    const subA = new ConcreteSubscriber(subject);
    subject.addSubscriber(subA)
    const subB = new ConcreteSubscriber(subject);
    subject.addSubscriber(subB);
    subject.setState(19);
    subject.notify();
    // notifying all the subscriber list
    //ConcreteSubscriber: Received notify method from subject state   19
    //ConcreteSubscriber: Received notify method from subject state    19