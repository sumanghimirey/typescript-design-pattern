/**
 * Decorators are the pattern which acts as wrapper but only focuses on single objects, it modify objects without extending or subclasses.
 * its change existing behavour of object runtime without extending using a subclass.
 * 
 * 
 * When you have an object that created for a certain actions , and there is a requirement in the application to include additional actions or functionality 
 * when performing intial actions , then we will use Decorator Pattern. 
 */

// classic implementation 

interface Event {
    send(message:string):void
}

export class SendEmailEvent implements Event {
    send (message :string) :void {
        console.log('sending email event ', message)
    }
}

// lets say if you want log before and after send email event you will implement decorator pattern withou modified previous class implementation

export class LogSendEmailEvent implements Event {

    constructor(private event: Event) {
        this.event = event;
    }

    send (message:string) {
        console.log('this is log message before send email', message);
        this.event.send(message);
        console.info('this is after sending the message' , message)
    }
}

const event:Event = new SendEmailEvent();
const logEvent = new LogSendEmailEvent(event);
logEvent.send("Hello this is email message")


// Modern approach of decorator Pattern 