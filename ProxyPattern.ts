/**
 * 
 * Proxy is an entity that wraps an object that you require delegating operations on. 
 * thiis entity acts as permission guard and controll access to the proxied object, 
 * 
 * when to use proxy pattern
 * 
 * To prevent the creation of the object 
 * to decorate the methods
 * to protect against unnecessary or unauthorized calls.
 */

//implementation 

export interface Store {
    save(data: string): void;
    }
    export class TextStore implements Store {
    save(data: string): void {
    console.log(`Called 'save' from TextStore with
    data=${data}`);
    }
    }

    export class ProxyTextStore implements Store {
        constructor(private textStore?: TextStore) {}
        save(data: string): void {
        console.log(`Called 'save' from ProxyTextStore with
        data=${data}`);
        if (!this.textStore) {
        console.log("Lazy init: textStore.");
        this.textStore = new TextStore();
}
        this.textStore.save(data);
    }
    }