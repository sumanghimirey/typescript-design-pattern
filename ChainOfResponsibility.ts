/**
 * 
 * It allow us to perform certain operations on a particular object in a series of processing events.
 * Main idea to established chain of handlers that take an object part of request perform some operations and pass to the next handlers. 
 * 
 * When to use Chain Responsiblity Design pattern 
 * If you more than one decorators object that handles more than one request before sending back response
 * if you want add or remove item from chain dynamically 
 */

 interface IRequest {
    getOrigin(): string;
    getParams(): Map<string, string>;
    }
    class HTTPRequest implements IRequest {
    constructor(private origin: string, private params:
    Map<string, string>) {}
    getOrigin(): string {
    return this.origin;
    }
    getParams(): Map<string, string> {
    return this.params;
    }
    }

abstract class RequestHandler {
        constructor(protected next: RequestHandler | null) {}
        handleRequest(request: IRequest) {
            if (this.next !== null) {
                this.next.handleRequest(request);
                }
                }
        }


class LogRequestHandler extends RequestHandler {
    handleRequest(request: IRequest) {
            console.log('Request with origin: ${request.getOrigin()} handled by LogRequestHandler');
            if (this.next !== null) {
            this.next.handleRequest(request);
            }
            }
            }
            class EmailRequestHandler extends RequestHandler {
            handleRequest(request: IRequest) {
            console.log(
            'Request with origin: ${request.getOrigin()} handled by EmailRequestHandler'  );
            if (this.next !== null) {
            this.next.handleRequest(request);
            }
            }
            }


            const req = new HTTPRequest("localhost", new Map().set("q","searchTerm"));
            new LogRequestHandler(new EmailRequestHandler(null)).  handleRequest(req);
            // Request with origin: localhost handled by LogRequestHandler
            // Request with origin: localhost handled by  EmailRequestHandler