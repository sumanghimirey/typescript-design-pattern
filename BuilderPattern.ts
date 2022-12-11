//Builder Pattern

class Website {
    constructor (
            public name ?: string, 
            public host ?: string, 
            public port ?: number,
            public isPremium ?: boolean
            ) {}
    
}

interface WebisteBuilder {
    setName(name:string):WebisteBuilder;
    setHost(host:string):WebisteBuilder;
    setPort(port:number):WebisteBuilder;
    setIsPremium(isPremium:boolean): WebisteBuilder;
    build():Website
}


//create Premium website 

class PremiumWebsite implements WebisteBuilder {

    constructor(private website:Website) {
        this.clear()
    }
    setName(name: string): WebisteBuilder {
        this.website.name = name
        return this;
       
    }
    setHost(host: string): WebisteBuilder {
        this.website.host = host
        return this
        
    }
    setPort(port: number): WebisteBuilder {
       this.website.port = port
       return this;
    }
    setIsPremium(isPremium: boolean): WebisteBuilder {
       this.website.isPremium = true;
       return this;
    }
    build(): Website {
        const webiste = new Website()
        this.clear()
        return webiste;
        
    }
    clear ():void {
        this.website = new Website()
        this.website.isPremium = true;
    }
    
}

const cb = new PremiumWebsite(new Website())
cb.setName('premium website').setHost('http:://localhost').setPort(9090)
.build();
console.log(cb)
